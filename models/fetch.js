var fetchmodel = require ('../server');

module.exports={

    fetchdata:function(req, res){


        fetchmodel.fetchdata(function(data){

            res.render('adminview',{userdata:data});



        })
    }
}