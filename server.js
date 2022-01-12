const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express()




const uri =
"mongodb+srv://andrewmanteza21:IzTwjAW2UUoKZZe0@cluster0.jre2j.mongodb.net/Driver_records?retryWrites=true&w=majority";{
    
}

const client = new MongoClient(uri);
client.connect();
console.log("connected to mongodb database")

  const database = client.db('Driver_records');
  const userrecords = database.collection('user_records');

  console.log('test1')


      app.use(bodyParser.urlencoded({ extended: true}))

      app.set('view engine', 'ejs')
      //res.render(view,locals)

      app.listen(3000, function() {
        console.log('here on port 3000')
    })
      app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html')
      console.log('this Get from index.html works')
    })
      app.post('/user_records', (req, res) => {
      result = userrecords.insertOne(req.body)
      .then(result => {
      res.redirect('/')    
      console.log("this Form sending works")  
    
    })
      .catch(error => 
      console.error(error))
      console.log(req.body)
    
    })
      console.log('Read Function Test')
      app.get('/', (req,res) => {
      const cursor = db.collection('user_records').find()
      console.log(cursor)
      console.log('Read Function Success')
    })
      
    



    
    
    
        
            
    
  
    


   






    // Replace the uri string with your MongoDB deployment's connection string.
