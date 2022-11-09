const sendMessage = document.querySelector('.sendMessage')
const textMessage = document.querySelector('.textMessage')
const chatContainer = document.querySelector('.chatContainer')

const socket = io();

sendMessage.addEventListener('click', async e => {
    e.preventDefault()

    if(textMessage.value.length < 3) return

    socket.emit("MESSAGE_SERVER", { id: socket.id, message: textMessage.value })

    textMessage.value = ''
})

socket.on("UPDATE_MESSAGES", (data) => {
    let messageList = ''

    /* const idFilter = data.filter(val => socket.id === val.id)
    const idNoFilter = data.filter(val => socket.id != val.id) */
    
    data.forEach(val => { 
        console.log(val.id.toString() == socket.id.toString())
        messageList = messageList + 
        `<div class="${(val.id == socket.id ? 'flex w-full mt-2 space-x-3 max-w-xs' : 'flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end')}">  
            <div>
                <div class="${(val.id == socket.id ? "bg-gray-300 p-3 rounded-r-lg rounded-bl-lg" : 'bg-emerald-600 text-white p-3 rounded-l-lg rounded-br-lg')}">
                    <div class="${(val.id == socket.id ? "text-gray-700 border-b border-gray-400" : "text-gray-200 border-b border-emerald-500")}">${val.id}</div>
                    <p class="${val.id == socket.id ? "text-sm text-gray-700" : "text-sm text-gray-200"}">${val.message}</p>
                </div>
            </div>
        </div>`
    })
    chatContainer.innerHTML = messageList

    /* data.forEach(val => { 
        messageList = messageList + 
        `<div class=${(val.id == socket.id ? 'flex w-full mt-2 space-x-3 max-w-xs' : 'flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end')}>  
            <div>
                <div class="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                    <div class="text-gray-700 border-b w-10 border-gray-400">${val.id}</div>
                    <p class="text-sm text-gray-700">${val.message}</p>
                </div>
            </div>
        </div>`
    })
    chatContainer.innerHTML = messageList */

    /* idNoFilter.forEach(val => {
        messageList = messageList + 
        `<div class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
                <div class="bg-emerald-600 text-white p-3 rounded-l-lg rounded-br-lg">
                    <div class="text-gray-200 border-b w-10 border-emerald-500">${val.id}</div>
                    <p class="text-sm text-gray-200">${val.message}</p>
                </div>
            </div>
        </div>`
    })
    chatContainer.innerHTML = messageList */
})

/* socket.on("connect", () => {

    
}); */


