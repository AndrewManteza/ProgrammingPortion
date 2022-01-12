const express = require('express');

const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express()


app.use(bodyParser.urlencoded({ extended: true}))

app.listen(3000, function() {
    console.log('here on port 3000')

})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.post('/LTOform' ,(req, res) => {

    console.log(req.body)
}
)


// Connection URI
const uri =
  "mongodb+srv://andrewmanteza21:1UDejNyGIB0jWafB@cluster0.jre2j.mongodb.net/Driver_records?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
