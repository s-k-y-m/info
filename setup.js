var faker = require('faker');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var imgCount;
var dir = ['./assets/knownfor/breakfast.svg', './assets/knownfor/dinner.svg', './assets/knownfor/kids.svg',
  './assets/knownfor/lively-scenes.svg', './assets/knownfor/lunch.svg', 
  './assets/knownfor/outdoor-seating.svg', './assets/knownfor/people-watching.svg', './assets/knownfor/quick-bites.svg', 
  './assets/knownfor/takeout.svg'];

mongoose.connect('mongodb://localhost/restaurants');

var restSchema = mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  category: String,
  desc: String,
  location: String,
  expense: Number,
  food_rating: Number,
  decor_rating: Number,
  service_rating: Number,
  desc_bold: String,
  knownfor_img: Array,
  knownfor_desc: Array,
  mentions: Array
});

var Restaurant = mongoose.model('Restaurant', restSchema);

var randomGen = function(flag) {
  var randNum = Math.floor(Math.random() * 5) + 1;
  var arr = [];

  if (flag === 'rating') {
    randNum += ((Math.random() * .99) + .01);
    randNum = randNum.toFixed(1);
  }
  if (flag === 'image') {
    for (var i = 0; i < (randNum + 3); i++) {
      arr.push(dir[Math.floor(Math.random() * 8) + 1]);
    }
    randNum = arr;
  }
  if (flag === 'avatar') {
    for (var i = 0; i < randNum; i++) {
      arr.push(faker.fake('{{image.avatar}}'));
    }
    randNum = arr;
  }
  if (flag === 'words') {
    for (var i = 0; i < (randNum + 3); i++) {
      arr.push(faker.lorem.words());
    }
    randNum = arr;
  }
  return randNum;
};

var databaseData = new Array(100).fill(null)
  .map(e =>
    e = {id: new ObjectID(),
      name: faker.fake('{{company.companyName}}'),
      category: faker.fake('{{commerce.productName}}'),
      desc: faker.fake('{{company.bs}}'),
      location: faker.fake('{{address.city}}'),
      expense: randomGen(),
      food_rating: randomGen('rating'),
      decor_rating: randomGen('rating'),
      service_rating: randomGen('rating'),
      desc_bold: faker.fake('{{lorem.sentences}}'),
      knownfor_img: randomGen('image'),
      knownfor_desc: randomGen('words'),
      mentions: randomGen('avatar')
    });

try {
  Restaurant.insertMany(databaseData);
} catch (e) {
  restaurants;
  console.log(e);
}
// mongoose.connection.close();
module.exports.databaseData = databaseData;

