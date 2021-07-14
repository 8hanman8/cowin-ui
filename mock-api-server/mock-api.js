/*eslint-disable*/
var jsonServer = require("json-server"),
  db = require("./db.js"),
  _ = require("lodash");

const server = jsonServer.create();
const router = jsonServer.router(db);
var middlewares = jsonServer.defaults();

// [Custom output](https://github.com/typicode/json-server#custom-output-example)
router.render = function (req, res) {
  var data = res.locals.data;
  res.jsonp(data);
};

server.use(middlewares);
//////  Default post mock example ///////
// server.use(function(req, res, next) {
//   // add id on post if one is not provided
//   if (req.method === 'POST' && !req.body.id)
//     req.body.id = _.uniqueId()
//   }
//   next()
// })

/////////   Converting all post request to get to get customized json responce from db.js     ///////////////
server.use(jsonServer.bodyParser);
server.use(function (req, res, next) {
  if (
    req.method === "POST" ||
    req.method === "DELETE" ||
    req.method === "PUT"
  ) {
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = "GET";
    req.query = req.body;
  }
  // Continue to JSON Server router
  next();
});

////////  Ex: mocking only single post request - If you need to scope this behaviour to a particular route, use this      ///////////////
// server.post('/comments', function (req, res, next) {
//   req.method = 'GET'
//   req.query = req.body
//   next()
// })
// server.use(jsonServer.rewriter({
//   "/api/v2/auth/generateMobileOTP": "/generateMobileOTP"
// }))

server.use(jsonServer.rewriter(require("./routes.json")));

server.use("/", router);
// server.use("/api/v2/auth/",router)
server.listen(3004, function () {
  console.log("JSON Server is running");
});
