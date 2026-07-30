let classdiv0 = document.querySelector("#classdiv0");
let classdiv1 = document.querySelector("#classdiv1");
let classdiv2 = document.querySelector("#classdiv2");
let classdiv3 = document.querySelector("#classdiv3");
let classdiv4 = document.querySelector("#classdiv4");
let classdiv5 = document.querySelector("#classdiv5");
let classdivs = [classdiv0,classdiv1,classdiv2,classdiv3,classdiv4,classdiv5];

for(let i = 0;i<database.length;i++){
    add(classdivs[database[i].category],
        database[i].name,
        database[i].desc,
        database[i].url);
}

let sidebar = document.querySelector(".sidebar_1");
sidebar.sta = 0;
sidebar.addEventListener("click",sidebar_movement);

