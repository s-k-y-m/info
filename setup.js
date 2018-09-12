var faker = require('faker');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

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
  knownfor_desc: String,
  mentions: Array
});

var Restaurant = mongoose.model('Restaurant', restSchema);

var randomGen = function(flag) {
  var randNum = Math.floor(Math.random() * 5) + 1;
  var arr = [];

  if (flag === 'rating') {
    randNum += ((Math.random() * .99) + .01);
    randNum = randNum.toFixed(2);
  }
  if (flag === 'image') {
    for (var i = 0; i < randNum; i++) {
      arr.push(faker.fake('{{random.image}}'));
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
      location: faker.fake('{{address.city}}, {{address.stateAbbr}}'),
      expense: randomGen(),
      food_rating: randomGen('rating'),
      decor_rating: randomGen('rating'),
      service_rating: randomGen('rating'),
      desc_bold: faker.fake('{{lorem.sentences}}'),
      knownfor_img: randomGen('image'),
      knownfor_desc: faker.fake('{{random.words}}'),
      mentions: randomGen('image')
    });

try {
  Restaurant.insertMany(databaseData);
} catch (e) {
 restaurants;
  console.log(e);
}
// mongoose.connection.close();
module.exports.databaseData = databaseData;
