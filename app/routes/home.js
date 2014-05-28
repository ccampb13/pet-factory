'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'factory.jpg', title: 'Pet Factory'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg: 'bg.jpg', title: 'About Pet Factory'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg:'contact.jpg', title: 'Contact Pet Factory'});
};
