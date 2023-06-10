//DARK MODE 

const theme = document.getElementById('dark')
const bright = document.getElementById('DayMode');
const dark = document.getElementById('NightMode');


let change = 0;

theme.addEventListener('click', function () {
    if (change === 0) {
        bright.style.display = "grid";
        dark.style.display = "none";
        document.documentElement.style.setProperty('--ecriture', 'WHITE');
        document.documentElement.style.setProperty('--background', 'rgb(39, 81, 100)');
        document.documentElement.style.setProperty('--color', 'rgb(9, 255, 83)');
        document.documentElement.style.setProperty('--back', 'linear-gradient(to bottom, rgb(43, 84, 84), rgb(55, 48, 88))');
        document.documentElement.style.setProperty('--secteur', "rgb(39, 81, 87)");
        document.documentElement.style.setProperty('--message', "white");
        document.documentElement.style.setProperty('--msgtime', "white");
        document.documentElement.style.setProperty('--mine', "rgb(64, 116, 116)");
        document.documentElement.style.setProperty('--other', "rgb(97, 87, 146)");
        document.documentElement.style.setProperty('--roomcolor', "blue");
        document.documentElement.style.setProperty('--notification', "rgb(22, 103, 233)");
        document.documentElement.style.setProperty('--backgroundMessage', "linear-gradient(to left, rgb(64, 116, 116), rgb(97, 87, 146))");
        document.querySelector(".sct2").style.backgroundImage = "url('image/black version.jpg')";

        change++;
    }


    else {
        document.documentElement.style.setProperty('--ecriture', 'BLACK')
        document.documentElement.style.setProperty('--background', 'rgb(240, 249, 252)')
        document.documentElement.style.setProperty('--color', 'rgb(0, 90, 163)')
        document.documentElement.style.setProperty('--back', 'linear-gradient(to bottom, rgb(99, 207, 207), rgb(165, 147, 247))')
        document.documentElement.style.setProperty('--secteur', ' rgb(240, 249, 252)');
        document.documentElement.style.setProperty('--message', "black");
        document.documentElement.style.setProperty('--msgtime', "black");
        document.documentElement.style.setProperty('--mine', "rgb(99, 207, 207)");
        document.documentElement.style.setProperty('--other', "rgb(165, 147, 247)");
        document.documentElement.style.setProperty('--roomcolor', "rgb(165, 147, 247)");
        document.documentElement.style.setProperty('--notification', "dark");
        document.documentElement.style.setProperty('--backgroundMessage', "linear-gradient(to right, rgb(99, 207, 207), rgb(165, 147, 247))")
        document.querySelector(".sct2").style.backgroundImage = "url('image/white version.jpg')"
        change--
        bright.style.display = "none"
        dark.style.display = "grid"
    }
})
//mini dark mode
document.getElementById("littledark").addEventListener("click", function () {

    if (change === 0) {
        document.getElementById("miniNightMode").style.display = "none"
        document.getElementById("miniDayMode").style.display = "grid"
        document.documentElement.style.setProperty('--ecriture', 'WHITE');
        document.documentElement.style.setProperty('--background', 'rgb(39, 81, 100)');
        document.documentElement.style.setProperty('--color', 'rgb(9, 49, 83)');
        document.documentElement.style.setProperty('--back', 'linear-gradient(to bottom, rgb(43, 84, 84), rgb(55, 48, 88))');
        document.documentElement.style.setProperty('--secteur', "rgb(39, 81, 87)");
        document.documentElement.style.setProperty('--message', "white");
        document.documentElement.style.setProperty('--msgtime', "white");
        document.documentElement.style.setProperty('--mine', "rgb(64, 116, 116)");
        document.documentElement.style.setProperty('--other', "rgb(97, 87, 146)");
        document.documentElement.style.setProperty('--roomcolor', "blue");
        document.documentElement.style.setProperty('--notification', "rgb(22, 103, 233)");
        document.documentElement.style.setProperty('--backgroundMessage', "linear-gradient(to left, rgb(64, 116, 116), rgb(97, 87, 146))");
        document.querySelector(".sct2").style.backgroundImage = "url('image/black version.jpg')";


        change++;
    }

    else {
        document.documentElement.style.setProperty('--ecriture', 'BLACK')
        document.documentElement.style.setProperty('--background', 'rgb(240, 249, 252)')
        document.documentElement.style.setProperty('--color', 'rgb(0, 90, 163)')
        document.documentElement.style.setProperty('--back', 'linear-gradient(to bottom, rgb(99, 207, 207), rgb(165, 147, 247))')
        document.documentElement.style.setProperty('--secteur', ' rgb(240, 249, 252)')
        document.documentElement.style.setProperty('--message', "black");
        document.documentElement.style.setProperty('--msgtime', "black");
        document.documentElement.style.setProperty('--mine', "rgb(99, 207, 207)");
        document.documentElement.style.setProperty('--other', "rgb(165, 147, 247)");
        document.documentElement.style.setProperty('--roomcolor', "rgb(165, 147, 247)");
        document.documentElement.style.setProperty('--notification', "dark");
        document.documentElement.style.setProperty('--backgroundMessage', "linear-gradient(to right, rgb(99, 207, 207), rgb(165, 147, 247))")
        document.querySelector(".sct2").style.backgroundImage = "url('image/white version.jpg')"

        change--
        document.getElementById("miniDayMode").style.display = "none"
        document.getElementById("miniNightMode").style.display = "grid"
    }
})
//Button to leave
document.getElementById("Bye").addEventListener("click", () => {
    location.href = "index.html";
})
document.getElementById("miniBye").addEventListener("click", () => {
    location.href = "index.html";
})




const btnToCreate = document.getElementById("btnToCreate");
const Iconplus = document.getElementById("Iconplus");
const newRoom = document.getElementById("newRoomForm");
const blackBody = document.getElementById("blackBody");
const roomName = document.getElementById("roomName");
const aboutIt = document.getElementById("aboutIt");


newRoom.classList.add("dontShow");
blackBody.classList.add("dontShow");

Iconplus.addEventListener("click", () => {
    newRoom.classList.remove("dontShow");
    blackBody.classList.remove("dontShow");
    setTimeout(() => {
        Iconplus.classList.add("nopointer");
    }, 1000)
})
btnToCreate.addEventListener("click", () => {
    newRoom.classList.add("dontShow");
    blackBody.classList.add("dontShow");
    setTimeout(() => {
        alert(roomName.value + " registered")
        Iconplus.classList.remove("nopointer")
        roomName.value = "";
        aboutIt.value = "";
    }, 1000)
})
    ;






















