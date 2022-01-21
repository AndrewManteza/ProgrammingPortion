const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs')

mongoose.connect('mongodb+srv://andrewmanteza21:eRqrhWTR8zMJ27rt@cluster0.jre2j.mongodb.net/Driver_records?retryWrites=true&w=majority')
const conn = mongoose.connection;

const uri =
"mongodb+srv://andrewmanteza21:eRqrhWTR8zMJ27rt@cluster0.jre2j.mongodb.net/Driver_records?retryWrites=true&w=majority";{
    

const client = new MongoClient(uri);
client.connect();
console.log("connected to mongodb database")

  const database = client.db('Driver_records');
  const userrecords = database.collection('user_records');
  const adminrecords = database.collection('admin');

      app.use(express.static(path.join(__dirname, '/public')));
      app.use(express.static(path.join(__dirname, '/views')));
      app.use(bodyParser.urlencoded({ extended: true}))
      app.set('view engine', 'ejs')
      
     
     

      app.listen(8000, function() {
        console.log('here on port 8000')
  
    })

    app.get('/registeruser', function (req, res) {
      res.render('registeruser')
      console.log('this Get from registeruser.ejs works')

    })


    app.get('/adminview', function (req, res) {
      res.render('adminview')
      console.log('this Get from adminview.ejs works')


    })

    app.get('/techstack', function (req, res) {
      res.render('techstack')
      console.log('this Get from techstack.ejs works')

    })

      app.get('/landingpage', function (req, res) {
      res.render('landingpage')
      console.log('this Get from landingpage.ejs works')

    })
    app.get('/contactinfo', function (req, res) {
      res.render('contactinfo')
      console.log('this Get from contactinfo.ejs works')
    })

    app.get('/servicesoffered', function (req, res) {
      res.render('servicesoffered')
      console.log('this Get from servicesoffered.ejs works')
    })


    app.get('/admin', function (req, res) {
      res.render('admin')
      console.log('this Get from admin.ejs works')

    })

      app.get('/index', function (req, res) {
      res.render('index')
      console.log('this Get from index.ejs works')

    })

    app.get('/loginpage', function (req, res) {
      res.render('loginpage')
      console.log('this Get from login.ejs works')

    })
  
      app.post('/user_records', (req, res) => {
      result = userrecords.insertOne(req.body)
      .then(result => {
      res.redirect('/landingpage')    
      console.log("this Form sending works")  
    
    })
      .catch(error => 
      console.error(error))
      console.log(req.body)
    
    })
    var router = express.Router()
      console.log('Read Function Test')
      app.get('/', (req,res) => {
      const cursor = database.collection('user_records').find().toArray()
      .then(results => {res.render('adminview', { user_records: results})})
      console.log(cursor)
      console.log('Read Function Success') 
      module.exports = cursor
      })



    module.exports={
      fetchData: function(callback){
        var userdata=userModel.find({});
        userdata.exec(function(err, data) {
          if(err) throw err;
          return callback(data);
        })
      }
    }


    app.post('/admin', (req, res) => {
      result = adminrecords.insertOne(req.body)
      .then(result => {
      res.redirect('/adminview')    
      console.log("this admin Form sending works")  
    
    })

    .catch(error => 
      console.error(error))
      console.log(req.body)
    
    })
    const userSchema = {
      firstname: String,
      middlename: String,
      lastname: String,
      phoneno: String,
      LCA: String,
  }


  const userTable = mongoose.model('user_records', userSchema);

  app.get('/adminview', (req, res) => {
    userTable.find({}, function(err, userSchema) {
      res.render('adminview', {
        userlist: userSchema
      })
    })

  })


       /*
    const userSchema = {
      firstname: String,
      middlename: String,
      lastname: String,
      phoneno: String,
      LCA: String,
  }
  
  const userlist = mongoose.model('userrecords, userSchema');
  app.get('/adminview', (req, res) => {
      userrecords.find({}, function(err, user_records) {
          res.render('adminview', { userlist: user_records })
      })
  })
 
  app.get('/adminview', (req, res) => {
    db.collection('user_records').find().toArray()
      .then(results => {
        res.render('adminview', { user_records: results })
      })
      .catch(/* ... */


    
      
   
           
        /*const express = require('express');
        const mongoose = require('mongoose');
        const app = express();
        const ejs = require('ejs');
        const { kStringMaxLength } = require('buffer');
        
        app.set('view engine', 'ejs');
        
        mongoose.connect('mongodb+srv://admin-marina:marinochka90@cluster0.hr1hl.mongodb.net/moviesDB?retryWrites=true&w=majority');
        
        const moviesSchema = {
            title: String,
            genre: String,
            year: String
        }
        */
      
        /*const Movie = mongoose.model('Movie', moviesSchema);
        
        app.get('/', (req, res) => {
            Movie.find({}, function(err, movies) {
                res.render('index', {
                    moviesList: movies
                })
            })
        })
        */
       
     
    
    
    
        
            
    
  
    


   






