const express = require('express');
const path = require('path')
const http = require('http');
const { Server } = require("socket.io");
const { disconnect } = require('process');
const {formatMessage, notification} = require ('./utils/messages');
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require ('./utils/users');

const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

let voidValue = ''

let user;
let defaultroom = 'Global room';
let actualroom;
//run when client connect 
io.on('connection', socket => {
  socket.on('joinRoom', ({yourName , yourRoom}) =>{
    user = userJoin(socket.id, yourName, yourRoom);
    if ( user.yourRoom === ''){
      actualroom = defaultroom;
    }else if(user.yourRoom != ''){
      actualroom = user.yourRoom;
    }
  
  socket.join(actualroom);

  //welcome current user
  socket.emit('connectionToChat' , notification ('welcome to instanChat'));

  // broadcast when user connect
  socket.broadcast.to(actualroom).emit('connectionToChat' , notification( `${user.yourName} has joined the chat`)); 
  //send user and room info
  io.to(actualroom).emit('roomUsers', {room: actualroom, users: getRoomUsers(actualroom)});
  })

    
  

   //listen for msg
   socket.on('chatMessage', (msg) => {
     const user = getCurrentUser(socket.id);
      console.log(msg)
      socket.emit('message' , formatMessage( user.yourName, msg))    
      socket.broadcast.to(actualroom).emit('otherMessage' , formatMessage(user.yourName , msg))    
   })
 
   //Runs when client disconnects
   socket.on('disconnect', () =>{
    const userL = userLeave(socket.id);
    if (userL){
      io.to(actualroom).emit('connectionToChat', notification(`${user.yourName} has left the chat`));
      //send users and room info 
    io.to(actualroom).emit('roomUsers', {room: actualroom, users : getRoomUsers(actualroom)});
    };
    

   });

});

 
server.listen(8000, () => {
  console.log('listening on port :8000');
});

 