let current_vertex = 0;
function send_message(text, is_user){
    let chat_box = document.createElement("div");
    if(is_user){
        chat_box.className = "flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end";
        chat_box.innerHTML = "<div>\n" +
            "                    <div class=\"bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg\">\n" +
            `                        <p class="text-sm">${text}</p>\n` +
            "                    </div>\n" +
            "                </div>\n" +
            "                <div class=\"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"></div>"
    }
    else{
        chat_box.className = "flex w-full mt-2 space-x-3 max-w-xs";
        chat_box.innerHTML = "<div class=\"flex-shrink-0 h-10 w-10 rounded-full bg-gray-300\"></div>\n" +
            "                <div>\n" +
            "                    <div class=\"bg-gray-300 p-3 rounded-r-lg rounded-bl-lg\">\n" +
            `                        <p class=\"text-sm\">${text}</p>\n` +
            "                    </div>\n" +
            "                </div>"
    }
    document.getElementById("chats").appendChild(chat_box);
}

function change_state(e, sent_text){
    send_message(sent_text, 1);
    // reply
    let reply = reply_scripts[e];
    for(let i = 0; i < reply.text.length; i++){
        send_message(reply.text[i], 0);
    }
    // change state
    current_vertex = reply.next_vertex;
    let options = document.getElementById("option");
    options.innerHTML = "";
    create_button(current_vertex, options);
}

function create_button(v, component){
    let space_line = document.createElement("div");
    space_line.className = "m-4";
    for(let i = 0; i < self_scripts[v].length; i++){
        if(i > 0) {
            let space_line_cloned = space_line.cloneNode(true);
            component.appendChild(space_line_cloned);
        }
        let text = self_scripts[v][i].text;
        let reply_edge = self_scripts[v][i].reply_edge;
        let button = document.createElement("button");
        button.className = "flex items-center h-10 w-full rounded px-3 text-sm bg-gray-200 text-gray-600";
        button.onclick = function(){change_state(reply_edge, text)};
        button.innerText = text;
        component.appendChild(button);
    }
}

function init(){
    let options = document.getElementById("option");
    options.innerHTML = "";
    create_button(0, options);
}

document.addEventListener("DOMContentLoaded", init())