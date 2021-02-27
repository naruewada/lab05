var count = 0;
document.querySelector('#click').addEventListener('click',onClick);
function onClick() {

    if (count % 2 == 0) {

        document.querySelector('body').style.backgroundColor = 'black';
        document.getElementById("content").style.color = 'white';
        document.querySelector('#world').style.color = 'rgb(97, 97, 223)';
        document.querySelector('h1').textContent = "Good night";
        document.querySelector(".change").textContent = " night";
        document.querySelector(".change1").textContent = "day";
        document.querySelector(".change2").textContent = " day";
        count++;

    }
    else {

        document.querySelector('body').style.backgroundColor = 'white';
        document.getElementById("content").style.color = 'black';
        document.querySelector('#world').style.color = 'red';
        document.querySelector('h1').textContent = "Good Morning";
        document.querySelector(".change").textContent = "day";
        document.querySelector(".change1").textContent = "night";
        document.querySelector(".change2").textContent = " night";
        count++;
    }
}