let classdiv0 = document.querySelector("#classdiv0");
let classdiv1 = document.querySelector("#classdiv1");
let classdiv2 = document.querySelector("#classdiv2");
let classdiv3 = document.querySelector("#classdiv3");
let classdiv4 = document.querySelector("#classdiv4");
let classdiv5 = document.querySelector("#classdiv5");
let classdiv6 = document.querySelector("#classdiv6");
let classdiv7 = document.querySelector("#classdiv7");
let classdivs = [classdiv0,classdiv1,classdiv2,classdiv3,classdiv4,classdiv5,classdiv6,classdiv7];

for(let i = 0;i<database.length;i++){
    add(classdivs[database[i].category],
        database[i].name,
        database[i].desc,
        database[i].url);
}

let sidebar = document.querySelector(".sidebar_1");
sidebar.sta = 0;
sidebar.addEventListener("click",sidebar_movement);

let sidebar_button_0 = document.querySelector("#sidebar_button_0");
let sidebar_button_1 = document.querySelector("#sidebar_button_1");
let sidebar_button_2 = document.querySelector("#sidebar_button_2");
let sidebar_button_3 = document.querySelector("#sidebar_button_3");
let sidebar_button_4 = document.querySelector("#sidebar_button_4");
let sidebar_button_5 = document.querySelector("#sidebar_button_5");
let sidebar_button_6 = document.querySelector("#sidebar_button_6");
let sidebar_button_7 = document.querySelector("#sidebar_button_7");
let sidebar_buttons = [sidebar_button_0,sidebar_button_1,sidebar_button_2,
                    sidebar_button_3,sidebar_button_4,sidebar_button_5,
                    sidebar_button_6,sidebar_button_7];
for(let i = 0;i<sidebar_buttons.length;i++){
    sidebar_buttons[i].addEventListener("click",sidebar_button_click);
}

