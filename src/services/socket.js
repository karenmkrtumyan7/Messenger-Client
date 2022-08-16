import io from 'socket.io-client';

const socket = io(process.env.BASE_URL || 'http://localhost:8001');

export default socket;
