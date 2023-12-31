let current_vertex = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function send_message(text, is_user, sleep_time = 0){
    let chat_box = document.createElement("div");
    if (is_user) {
        chat_box.className = "flex w-full mt-2 mb-8 space-x-5 justify-end";
        chat_box.innerHTML = "<div class=\"w-fit\">\n" +
            "                    <div class=\"bg-blue-600 text-white p-3 rounded-full\">\n" +
            `                        <p class="m-3 text-4xl">${text}</p>\n` +
            "                    </div>\n" +
            "                </div>\n"
    }
    else{
        sleep(sleep_time).then(() => {
            chat_box.className = "flex w-full mt-2 mb-8 space-x-3";
            chat_box.innerHTML = "<div class=\"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"></div>\n" +
                "                <div class=\"max-w-[80%] w-fit\">\n" +
                "                    <div class=\"bg-gray-300 p-3 rounded-full\">\n" +
                `                        <p class=\"m-3 text-4xl\">${text}</p>\n` +
                "                    </div>\n" +
                "                </div>"
        });
    }
    document.getElementById("chats").appendChild(chat_box);
}

function send_photo(photo_path, is_user, sleep_time = 0){
    let chat_box = document.createElement("div");
    if (is_user) {

    }
    else{
        sleep(sleep_time).then(() => {
            chat_box.className = "flex w-full mt-2 mb-8 space-x-3";
            chat_box.innerHTML = "<div class=\"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"></div>\n" +
                "                <div class=\"max-w-[80%] w-fit\">\n" +
                "                     <img class=\"rounded-lg\" src=\"images/loading.jpg\">" +
                "                </div>"
        });
    }
    sleep(sleep_time + 300).then(() => {
        chat_box.innerHTML = "<div class=\"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"></div>\n" +
            "                <div class=\"max-w-[80%] w-fit\">\n" +
            `                     <img class="rounded-lg" src="${photo_path}">` +
            "                </div>"
    });
    document.getElementById("chats").appendChild(chat_box);
}

function change_state(e, sent_text) {
    let options = document.getElementById("option");
    options.innerHTML = "";
    if (e == 5 || e == 6) {
        sent_text = "這題的答案是 " + sent_text;
    }
    send_message(sent_text, 1);
    let sleep_time = reply_scripts[e].sleep_time;
    // reply
    let reply = reply_scripts[e];
    for (let i = 0; i < reply.text.length; i++) {
        let text = reply.text[i];
        send_message(text, 0, sleep_time);
    }
    // photo
    let photos = reply.photos;
    for (let i = 0; i < photos.length; i++) {
        send_photo(`images/${photos[i]}`, 0, sleep_time);
    }
    // change state
    current_vertex = reply.next_vertex;
    if (current_vertex != -1) {
        create_button(current_vertex, options);
    }
}

function create_button(v, component){
    let num = self_scripts[v].length;
    if(num > 2){
       component.className = "grid grid-cols-2 gap-4"
    }
    for(let i = 0; i < self_scripts[v].length; i++){
        let text = self_scripts[v][i].text;
        let reply_edge = self_scripts[v][i].reply_edge;
        let button = document.createElement("button");
        button.className = "h-fit text-5xl w-full rounded-full px-3 bg-gray-200 text-gray-600 m-4";
        if(num > 2){
            button.className = "h-fit text-5xl w-full rounded-full px-3 bg-gray-200 text-gray-600";
        }
        button.onclick = function(){change_state(reply_edge, text)};
        button.innerHTML = `<div class="h-5"></div>${text}<div class="h-5"></div>`;
        component.appendChild(button);
    }
}

function init(){
    let options = document.getElementById("option");
    options.innerHTML = "";
    create_button(0, options);
}

document.addEventListener("DOMContentLoaded", init())