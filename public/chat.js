$(function() {
    var socket = io.connect("http://172.16.4.17:3000", {reconnect: true});
    let message = $("#message");
    let username = $("#username");
    let sendMessage = $("#send_message");
    let sendUsername = $("#send_username");
    let chatroom = $("#chatroom");
    sendUsername.on("click", () => {

        console.log(username.val());
        socket.emit("change_username", {username: username.val()})
    });
    sendMessage.on("click", () => {
        socket.emit("new_message", {message: message.val()})
    });
    socket.on("new_message", (data) => {
        console.log(data);
        chatroom.append(`<p class="message">${data.username}: ${data.message}</p>`)
    })

});