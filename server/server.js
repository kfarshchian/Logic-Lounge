const express = require('express');
const http = require('http'); //import http module
const socketIO = require('socket.io'); //import socketIO module
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express(); //creates an instance of an express server
// import the socket.io server connection
const connectSocketServer = require('./config/socket')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
  cache: "bounded",
});

// create server instance using http module with the app instance
const server = http.createServer(app); 
// attach Socket.io to the server and apollo server
const io = connectSocketServer(server,apolloServer);

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//stripe start
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51MvvjSH6SVkRFfSTatGzg2d2NKOeeYorl900gptT3ESf8I8lyQqhsnFFZ42VHO8DLr9eBCMVi8cvsZLFhFINUTxg00ISUVIrMX');
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1MvwQcH6SVkRFfSTqVS1gfsd',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

// app.listen(4242, () => console.log('Running on port 4242'));
//stripe finish

const startApolloServer = async (typeDefs, resolvers) => {
  await apolloServer.start();
  // This is attaching the apollo server as middleware, which will handle any incoming
  // requests from the apollo server, which then turns the requests into queries and
  // mutations.
  apolloServer.applyMiddleware({ app }); 

  db.once('open', () => {
    server.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    })
  })
};

startApolloServer(typeDefs, resolvers);

// The changes made above do not affect how the rest of the server runs
// TL,DR it is creating a socket.io middleware for the express server
// of which the requests are handled by the Apollo Server. This lets
// socket.io listen to the requests handled by the Apollo Server and 
// can update the client in real time
