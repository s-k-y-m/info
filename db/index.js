
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

module.exports.save = save;
module.exports.get - get;