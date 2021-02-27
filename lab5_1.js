var said = " said why you clicked me";

document.querySelector("#click_1").addEventListener('click',onClick_1);
document.querySelector("#click_2").addEventListener('click',onClick_2);
document.querySelector("#click_3").addEventListener('click',onClick_3);
document.querySelector("#click_4").addEventListener('click',onClick_4);
document.querySelector("div").addEventListener('click',Clicked);

function Clicked(){

    document.querySelector("#hi").textContent = "Hi";
    document.querySelector("#X").textContent = "Hi";
}

function onClick_1(){

    alert(document.querySelector("#click_1").innerText + said);
    document.querySelector("#click_1").style.backgroundColor = "black";
    document.querySelector("#click_1").style.border = "black";
    document.querySelector("#click_1").style.color = "white";
}

function onClick_2(){

    alert(document.querySelector("#click_2").innerText + said);
    document.querySelector("#click_2").style.backgroundColor = "black";
    document.querySelector("#click_2").style.border = "black";
    document.querySelector("#click_2").style.color = "white";
}

function onClick_3(){

    alert(document.querySelector("#click_3").innerText + said);
    document.querySelector("#click_3").style.backgroundColor = "black";
    document.querySelector("#click_3").style.border = "black";
    document.querySelector("#click_3").style.color = "white";
}

function onClick_4(){

    alert(document.querySelector("#click_4").innerText + said);
    document.querySelector("#click_4").style.backgroundColor = "black";
    document.querySelector("#click_4").style.border = "black";
    document.querySelector("#click_4").style.color = "white";
}
