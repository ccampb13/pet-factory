'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');

  pets.find().toArray((err, records)=>{  //records is plural
    res.render('pets/index', {pets: records, bg: 'stardust.png', title: 'Pet Factory'});
  });


};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);

  pets.findOne({_id:_id}, (err, record)=> {   //record is singular because we are only looking for one
    res.render('pets/show', {pet: record, bg: 'stardust.png', title: 'Pet Factory'});  //pet and record are both singular here
  });
};

exports.destroy = (req, res)=>{
    var _id = Mongo.ObjectID(req.params.id);
    var pets = global.nss.db.collection('pets');

    pets.findAndRemove({_id:_id}, (err, record) =>{
        res.redirect('/pets');

    });
};






exports.new = (req, res)=>{
    res.render('pets/new', {bg: 'stardust.png', title: 'Pet Factory: New'}); 
};

exports.create = (req, res)=>{
  var photo;

  switch(req.body.species){
  case 'Pig':
    photo ='pig.png';
    break;
  case 'Cow':
    photo ='cow.png';
    break;
  case 'Goat':
    photo ='goat.png';
    break;
  case 'Chicken':
    photo ='chicken.gif';
  }

  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, obj)=>{
      res.redirect(`/pets/${obj._id}`);
  });
};
