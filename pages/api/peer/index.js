const Server = require('socket.io')({ path: '/api/peer' })

Server.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId);
    })
})

export default function handler(req, res) {
    const { nanoid } = require('nanoid');
    res.status(200).json({ roomID: nanoid(15) });
}
