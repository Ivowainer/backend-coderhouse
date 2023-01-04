export const validationForm = (e) => {
    e.preventDefault()

    if(textMessage.value.length < 3) return

    socket.emit("MESSAGE_SERVER", { id: socket.id, message: textMessage.value })

    textMessage.value = ''
}