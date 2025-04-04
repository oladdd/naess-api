// Create a new folder for your JSON server
// server.js
const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Your JSON data file
const middlewares = jsonServer.defaults();

// Enable CORS for your Next.js app domain
server.use(cors({
  origin: ['https://your-nextjs-app.vercel.app', 'http://localhost:3000']
}));

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});