const express = require('express');
const app = express();


app.get('/', (req, res, next) => {
  const { request } = req.headers;
  if(request == "Ping") {
    return res.status(200).json({ message: "Pong!" })
  }
  res.status(404).json({ message: "Not Found"})
})