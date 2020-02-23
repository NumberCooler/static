#!/usr/bin/env node
const express = require('express');
const app = express();
var dir = process.cwd();
app.use(express.static(dir));
app.listen(8040,()=> {
    console.log("listening "+8040 + " with " + dir);
});