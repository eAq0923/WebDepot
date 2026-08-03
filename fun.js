function add(classdiv,name,desc,url){
    let webdiv = document.createElement("div");
    webdiv.className = "web";
    classdiv.appendChild(webdiv);

    let a = document.createElement("a");
    a.className = "url name";
    a.href = url;
    a.target = "_blank";
    a.textContent = name;
    webdiv.appendChild(a);

    let descbutton = document.createElement("button");
    descbutton.className = "descbutton";
    descbutton.textContent = "详情";
    webdiv.appendChild(descbutton);
    descbutton.addEventListener("click",tooltip_movement);

    let tooltip = document.createElement("p");
    tooltip.className = "desc";
    tooltip.textContent = desc;
    a.appendChild(tooltip);
}

function tooltip_movement(event){
    let descbutton = event.target;
    let webdiv = descbutton.parentNode;
    let a = webdiv.querySelector(".name");
    let tooltip = a.querySelector(".desc");

    tooltip.style.opacity = 0.4;
    tooltip.style.transform= "translateX(-3px)";
    clearTimeout(tooltip.timer);
    tooltip.timer = setTimeout(function(){
        tooltip.style.opacity = 0;
        tooltip.style.transform= "translateX(3px)";
    },3000);
}

function sidebar_movement(event){
    let sidebar_1 = event.target;
    let sidebar_2 = document.querySelector(".sidebar_2");
    let sidebar_3 = document.querySelector(".sidebar_3");
    if(sidebar_1.sta===0){
        sidebar_1.style.transform = "translateX(120px)";
        sidebar_2.style.transform = "translateX(120px)";
        sidebar_3.style.transform = "translateX(120px)";
        sidebar_1.textContent = "←";
        sidebar_1.sta=1;
    }
    else{
        sidebar_1.style.transform = "translateX(0px)";
        sidebar_2.style.transform = "translateX(0px)";
        sidebar_3.style.transform = "translateX(0px)";
        sidebar_1.textContent = "→";
        sidebar_1.sta=0;
    }
}

function sidebar_button_click(event){
    let sidebar_button = event.target;
    let href = sidebar_button.getAttribute("href");
    let classdiv = document.querySelector(href);

    classdiv.style.animation = "classdiv_breathing 0.5s ease 3";
    setTimeout(function(){
        classdiv.style.animation = "none";
    },1500);
}