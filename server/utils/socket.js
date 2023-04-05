/**
 * Attaches event listeners to the given io instance parameter for new client connections,
 * 'test-query' events, and disconnections
 * @param {io instance from socket.io} io 
 */
export default function(io) {
  // listen for new client connections
  io.on('connection', (socket) => {
    console.log('New client connected');

    // listen for 'test-query' event and log query
    socket.on('test-query', (query) => {
      console.log('Query sent: ', query)
    })

    // listen for client disconnection and log message 
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

  });
};