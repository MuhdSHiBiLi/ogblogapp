const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
require('./DB/connection');
const cors= require('cors');
const userRoutes = require('./Routes/userRoutes');
const blogPost = require('./Routes/blogpostRoutes');

const PORT = process.env.PORT || 3010;
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use('/user',userRoutes);
app.use('/user',blogPost)

app.get("/", async (req, res) => {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    const ip = Object.values(networkInterfaces)
      .flat()
      .find((iface) => iface.family === 'IPv4' && !iface.internal)?.address || '192.168.x.x';

    res.send(`Server running at http://${ip}:${PORT}`);
});

  

// app.listen(PORT,()=>{
//     console.log(`Port is running on http://localhost:${PORT}`);
// });
app.listen(PORT, '0.0.0.0', () => {
    const os = require('os');
    const networkInterfaces = os.networkInterfaces();
    const ip = Object.values(networkInterfaces)
      .flat()
      .find((iface) => iface.family === 'IPv4' && !iface.internal)?.address || '192.168.x.x';
  
    console.log(`Server running on:  
    - Local: http://localhost:${PORT}  
    - Network: http://${ip}:${PORT}`);
  });
