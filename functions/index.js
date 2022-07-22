const functions = require("firebase-functions");
const express = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51LKpRKSBreTNSDmONN1O512CfhwwG5oJ2kQk2kgJIguAp6XwOHUHvATSKBL7bT6Zm3WIOr6XsWKkS3i2VmQEkXFL00YKjcxJTF")
var cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (request, response) => response.status(200).send("hello world"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment request received ", total);   
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    
    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

exports.api = functions.https.onRequest(app)

//example endpoint
//http://localhost:5001/clone-1f60f/us-central1/api
