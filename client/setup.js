var faker = require('faker');
var mongoose = require('mongoose');
var port = process.env.port || 3001;

mongoose.connect('mongodb://localhost/restaurants');

var restSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
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
})

var Restaurant = mongoose.model('Restaurant', restSchema);

var save = (data) => {
  get((err, current) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      data.map((restaurant) => {
        var newRestaurant = new Restaurant({
          id: restaurant.id,
          name: restaurant.name,
          category: restaurant.name,
          desc: restaurant.desc,
          location: restaurant.loc,
          expense: restaurant.expense,
          food_rating: restaurant.food_rating,
          decor_rating: restaurant.decor_rating,
          service_rating: restaurant.service_rating,
          desc_bold: restaurant.desc_bold,
          knownfor_img: restaurant.knownfor_img,
          knownfor_desc: restaurant.knownfor_desc,
          mentions: restaurant.mentions
        })
        return newRestaurant;
      })
      data.forEach((restaurant) => { restaurant.save() })
    }
  })
}

var get = (callback) => {
  return Restaurant.find(callback)
}



var randomGen = function(flag) {
  var randNum = Math.floor(Math.random() * 5) + 1
  var arr = [];

  if (flag === 'rating') {
    randNum += ((Math.random() * .99) + .01)
    randNum = randNum.toFixed(2)
  }
  if (flag === 'image') {
    for (var i = 0; i < randNum; i++) {
      arr.push(faker.fake("{{random.image}}"))
    }
    randNum = arr;
  }
  return randNum;
}

var databaseData = new Array(100).fill(null)
                       .map(e =>
                   e = {name: faker.fake("{{company.companyName}}"),
                        category: faker.fake("{{commerce.productName}}"),
                        desc: faker.fake("{{company.bs}}"),
                        location: faker.fake("{{address.city}}, {{address.stateAbbr}}"),
                        expense: randomGen(),
                        food_rating: randomGen('rating'),
                        decor_rating: randomGen('rating'),
                        service_rating: randomGen('rating'),
                        desc_bold: faker.fake("{{lorem.sentences}}"),
                        knownfor_img: randomGen('image'),
                        knownfor_desc: faker.fake("{{random.words}}"),
                        mentions: randomGen('image')
                        })

// console.log(databaseData)
                

module.exports.save = save;
module.exports.get - get;
