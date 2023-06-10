const msgForm = document.getElementById('msgForm');
const mp = document.getElementById('mp');
const room = document.getElementById('room');
let audio = document.getElementById("audio");
const roomvalue1 = document.getElementById("roomValue1");
const roomvalue2 = document.getElementById("roomValue2");
const roomvalue3 = document.getElementById("roomValue3");
const userList = document.getElementById("users");

//get username and room
const { yourName, yourRoom } = Qs.parse(location.search , {
    ignoreQueryPrefix : true
});

console.log(yourName, yourRoom);

const socket = io();

//join chatroom
socket.emit('joinRoom', {yourName , yourRoom});

//get room and user 
socket.on('roomUsers', ({room, users}) => {
    outputRoomName(room);
    outputUsers(users);
})

//connectionTocChat (welcome)
socket.on('connectionToChat', notif => {
    console.log(notif);
    welcome(notif); 
});


//msg from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message);
    
});

socket.on('otherMessage', otherUserMessage => {
 
    console.log(otherUserMessage);
    audio.play(); 
    outputOtherMessage(otherUserMessage); 
});

//message submit
msgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    //get msg txt
    const msg = e.target.elements.sendMsg.value;

    //emit message to server
    socket.emit('chatMessage', msg);

    //clear the value of the input
    e.target.elements.sendMsg.value = '';
    e.target.elements.sendMsg.focus();

})

//output message(your own msg)

function outputOtherMessage(otherUserMessage){
    const div = document.createElement('div');
    div.classList.add('othermessage');
    div.innerHTML = `<p class="userandtimeOM">${otherUserMessage.yourName} <span class="msgtime">${otherUserMessage.time}</span></p>
    <p class="msg">
    ${otherUserMessage.text}
    </p>`;
    mp.appendChild(div);
    mp.scrollTop = mp.scrollHeight;
   
   
}


//output message(your own msg)
function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="userandtimeM">${message.yourName} <span class="msgtime">${message.time}</span></p>
    <p class="msg">
    ${message.text}
    </p>`;
    mp.appendChild(div);
    mp.scrollTop = mp.scrollHeight;
}

//welcome notification
function welcome(notif){
    const div = document.createElement('div');
    div.classList.add('welcome');
    div.innerHTML = `<span class="notiftime">${notif.time}</span></p> 
    <p class="text">
    ${notif.text}
    </p>`;
    mp.appendChild(div);
    mp.scrollTop = mp.scrollHeight;
}


// outputRoomName
function outputRoomName(room){ 
    roomvalue2.innerText = room
    roomvalue1.innerText = room
    roomvalue3.innerText = room
}

//outputUsers
function outputUsers(users){
    userList.innerHTML = `
    ${users.map(user => `<li>${user.yourName}</li>`).join('')}
  `;
}
