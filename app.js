const express = require('express');
const app = express();

app.use(express.json());

const blogPostRoute = require("./blogPost")
app.use(blogPostRoute)

app.listen(3000,()=>{
    console.log("Server is running..");
})