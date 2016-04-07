"use strict"

function description (req, res, next) {

  console.log(req.params)
  res.send(req.params);
  return next();
}

module.exports = {
  description: description
}


