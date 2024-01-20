// const express = require("express");
import express from 'express';
const app = express();
let PORT = 3500;

import sendMail from '../controllers/sendMail.js';

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.get("/sendingmail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.  ${PORT}`);
    });
  } catch (error) {}
};

start();