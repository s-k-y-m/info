var express = require('express');
var app = express();
var parser = require('body-parser');
var db = require('../db/index.js');

/*
 ********DELETE ME LATER**********
*/
// var tempHardCode = [
// { "_id":"5ba1b12b0129ac786856e5d6", "knownfor_img":[ "./assets/knownfor/lunch.svg", "./assets/knownfor/kids.svg", "./assets/knownfor/lunch.svg", "./assets/knownfor/lively-scenes.svg" ], "knownfor_desc":[ "esse sapiente molestiae", "fugiat provident nobis", "molestias in soluta", "aspernatur sed numquam" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/stefooo/128.jpg" ], "id":"5ba1b12b0129ac786856e572", "name":"Hayes, Auer and Bogan", "category":"Licensed Metal Bacon", "desc":"cross-platform syndicate systems", "location":"Port Madison", "expense":"$$$$$", "food_rating":4.8, "decor_rating":1.9, "service_rating":2.1, "desc_bold":"Beatae quis maxime rerum consequatur eaque earum suscipit officiis. Culpa molestiae voluptas aut nihil voluptas. Incidunt esse amet eaque ut magni laboriosam vel quis quos.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5da", "knownfor_img":[ "./assets/knownfor/people-watching.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/quick-bites.svg" ], "knownfor_desc":[ "beatae expedita et", "vel est ullam", "neque ea omnis", "saepe ullam eos", "nemo minus rerum", "est non id" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/rawdiggie/128.jpg" ], "id":"5ba1b12b0129ac786856e576", "name":"Cole, Legros and Durgan", "category":"Intelligent Fresh Cheese", "desc":"value-added reintermediate vortals", "location":"New Araceli", "expense":"$$$$$", "food_rating":4.8, "decor_rating":2.5, "service_rating":4.9, "desc_bold":"Consequatur et consectetur. Qui omnis quae magnam facilis quam. Similique voluptate alias perspiciatis alias accusamus consectetur.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5db", "knownfor_img":[ "./assets/knownfor/takeout.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/takeout.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/dinner.svg" ], "knownfor_desc":[ "eum explicabo tempore", "dolorum qui provident", "in fugiat est", "veniam et officiis", "quia non architecto" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/iamkarna/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/baires/128.jpg" ], "id":"5ba1b12b0129ac786856e577", "name":"Ritchie, Dicki and Bergnaum", "category":"Intelligent Concrete Shoes", "desc":"value-added iterate convergence", "location":"Halliechester", "expense":"$$$$", "food_rating":3.3, "decor_rating":1.5, "service_rating":5.8, "desc_bold":"A vel esse natus nostrum alias. Odio incidunt alias libero rerum repellendus non neque. Provident quis optio blanditiis. Aut cumque aut distinctio et et est saepe maiores pariatur.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5dc", "knownfor_img":[ "./assets/knownfor/dinner.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/takeout.svg", "./assets/knownfor/takeout.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/lunch.svg" ], "knownfor_desc":[ "nisi distinctio eius", "qui ut id", "autem natus magnam", "magni autem rerum", "laudantium suscipit autem", "earum officia doloremque", "saepe aut id", "praesentium aut cum" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/d_nny_m_cher/128.jpg" ], "id":"5ba1b12b0129ac786856e578", "name":"Bashirian, Deckow and Gleichner", "category":"Handmade Wooden Bike", "desc":"global deploy solutions", "location":"Port Philipville", "expense":"$$$", "food_rating":4.9, "decor_rating":1.2, "service_rating":4.8, "desc_bold":"Minus id et magni ut est corporis. Sint porro ut quo quis sed.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5dd", "knownfor_img":[ "./assets/knownfor/people-watching.svg", "./assets/knownfor/outdoor-seating.svg", "./assets/knownfor/kids.svg", "./assets/knownfor/lunch.svg", "./assets/knownfor/outdoor-seating.svg" ], "knownfor_desc":[ "eligendi distinctio voluptates", "aut eaque error", "sint quia aspernatur", "impedit in non" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/madshensel/128.jpg" ], "id":"5ba1b12b0129ac786856e579", "name":"Padberg - Rath", "category":"Sleek Steel Car", "desc":"frictionless engage platforms", "location":"North Emery", "expense":"$$$", "food_rating":3.2, "decor_rating":1.9, "service_rating":2.7, "desc_bold":"Iusto et veritatis pariatur maxime optio tempora. Voluptas maiores maxime alias a consequuntur vel. Architecto unde doloribus vel ab aut adipisci esse. Deserunt dolores porro aliquid temporibus. Provident est quia natus tempora iste aut ut aspernatur perferendis.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5de", "knownfor_img":[ "./assets/knownfor/takeout.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/kids.svg" ], "knownfor_desc":[ "ipsam numquam velit", "quia ea doloremque", "et eaque est", "reprehenderit vel ipsam", "ut nostrum animi" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/superoutman/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/wintopia/128.jpg" ], "id":"5ba1b12b0129ac786856e57a", "name":"Rau, O'Conner and Franecki", "category":"Unbranded Frozen Pants", "desc":"dynamic whiteboard systems", "location":"North Romanstad", "expense":"$$", "food_rating":3.9, "decor_rating":5.4, "service_rating":3.1, "desc_bold":"Et quia rerum. Saepe neque optio quo maiores.", "__v":0 },
// { "_id":"5ba1b12b0129ac786856e5df", "knownfor_img":[ "./assets/knownfor/people-watching.svg", "./assets/knownfor/lively-scenes.svg", "./assets/knownfor/dinner.svg", "./assets/knownfor/kids.svg", "./assets/knownfor/lively-scenes.svg" ], "knownfor_desc":[ "quae quis omnis", "aliquam ut reprehenderit", "et mollitia eius", "sed quis harum", "ea vitae rerum" ], "mentions":[ "https://s3.amazonaws.com/uifaces/faces/twitter/ninjad3m0/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/anaami/128.jpg", "https://s3.amazonaws.com/uifaces/faces/twitter/a_brixen/128.jpg" ], "id":"5ba1b12b0129ac786856e57b", "name":"Romaguera - Hand", "category":"Generic Plastic Soap", "desc":"intuitive unleash relationships", "location":"Considinestad", "expense":"$$", "food_rating":4.9, "decor_rating":4.9, "service_rating":3.6, "desc_bold":"Nemo voluptatem dolor. Et quae inventore ipsa ullam omnis. Suscipit enim libero soluta ullam dolor voluptatem. Quod voluptate occaecati.", "__v":0 },
// ]
app.use(parser.json());

var port = process.env.port || 3001;

app.use(express.static('./public'));

app.get('/restaurants/info/*', function(req, res) {
  console.log("GET Request on " + req.url);
  var dbId = req.url.slice(18);
  // console.log(dbId)
  // var sendMe = function(id) {
  //   for (var i = 0; i < tempHardCode.length; i++) {
  //     if (tempHardCode[i]['id'] === id) {
  //       console.log(id)
  //       return tempHardCode[i]
  //     }
  //   }
  // }
  // res.status(201).send(sendMe(dbId))
  // res.end();
  db.findOne(dbId, (err, data) => {
    if (err) {
      res.status(405).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  });
});

app.get('/restaurants/all', function(req, res) {
  console.log("GET Request on " + req.url);
  db.getAll((err, data) => {
    if (err) {
      res.status(404).send("error");
      res.end();
    } else {
      res.status(200).send(data);
      res.end();
    }
  // res.status(201).send(tempHardCode)
  // res.end();
  });
});


app.listen(port, function() {
  console.log(`Listening on ${port}`);
});