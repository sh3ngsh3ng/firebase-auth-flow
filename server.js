const express = require("express");
const { initializeApp } = require('firebase-admin/app');
// require("dotenv").config();

// create an instance of express app
let app = express();


// static folder
app.use(express.static("public"));

const firebaseApp = initializeApp()

async function main() {
    // console.log(firebaseApp)
}

main();

app.listen(3000, () => {
    console.log("Server has started");
});