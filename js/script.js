self_scripts = [
    [
        {
            text: "請問你有巨龍的線索嗎？",
            reply_edge: 0
        }
    ],
    [
        {
            text : "好啊",
            reply_edge: 1
        },
        {
            text : "不要 = =",
            reply_edge: 2
        }
    ],
    [
        {
            text : "可以",
            reply_edge: 4
        },
        {
            text : "不要啦",
            reply_edge: 3
        }
    ],
    [
        {
            text : "好吧",
            reply_edge: 4
        }
    ],
    [
        {
            text : "A",
            reply_edge: 5
        },
        {
            text : "B",
            reply_edge: 6
        },
        {
            text : "C",
            reply_edge: 6
        },
        {
            text : "D",
            reply_edge: 6
        }
    ]
]

reply_scripts = [
    {
        text: ["你能教英文嗎？需要家教"],
        photos: [],
        next_vertex : 1,
        sleep_time : 600
    },
    {
        text : ["那你可以幫我解答這些題目嗎？"],
        photos: [],
        next_vertex : 2,
        sleep_time : 400
    },
    {
        text : ["我很認真啦！！！！",
            "還是你可以幫我解題目就好 🥺"],
        photos: [],
        next_vertex : 3,
        sleep_time : 400
    },
    {
        text : ["不要鬧啦 🥹 幫我解題我就告訴你巨龍的線索"],
        photos: [],
        next_vertex : 3,
        sleep_time : 400
    },
    {
        text : [],
        photos: ["problem.jpg"],
        next_vertex : 4,
        sleep_time : 400
    },
    {
        text : ["謝謝你！！這些就當報酬吧"],
        photos : ["image83.jpg",
            "image2.jpg",
            "bus_stop.jpg"],
        next_vertex : -1,
        sleep_time : 400
    },
    {
        text : ["欸我看解答好像不是這樣⋯", "你好像有點笨，清大都這麼爛的嗎 😩😩，但看在你這麼努力的份上還是給你線索吧"],
        photos : ["image83.jpg",
            "image2.jpg",
            "bus_stop.jpg",
            "zoo.jpg"],
        next_vertex : -1,
        sleep_time : 400
    }
]