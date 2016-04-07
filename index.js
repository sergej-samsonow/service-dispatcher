"use strict"

var commander = require('commander'),
  restify = require('restify'),
  api = require('./api')

var args = commander
  .usage('[options]')
  .option('-p, --port [value]', 'server port', 12345)
  .option('-e, --env [value]', 'execution environment', 'dev')
  .option('-v, --version [value]', 'service version', 1)
  .parse(process.argv)


var server = restify.createServer({
  name: 'ISC',
  version: '0.0.1'
})
server.use(restify.acceptParser(server.acceptable))
server.use(restify.queryParser())
server.use(restify.bodyParser())

server.get('/service/description', api.description);


server.listen(args.port, function () {
  console.log('%s listening at %s', server.name, server.url);
})


