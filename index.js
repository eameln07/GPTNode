const http = require('http');
//const dt = require('/Users/evgeniimelnichuk/Desktop/Heroku/Node/NodeGPT0/datemodule.js');
const dt = require('./datemodule.js');
http.createServer((request, respond) => {
  let html = '<!DOCTYPE html>\n';
  html += '<html>\n';
  html += '<head>\n';
  html += '<title>GPT</title>\n';
  html += '</head>\n';
  html += '<body>\n';
  html += '<h1>ChatGPT</h1>\n';
  html += '<p>ChatGPT may produce inaccurate information about people, places, or facts.</p>\n';
  html += '<p style="color:blue;">Please be patient, it takes time to answer.</p>\n';
  html += '<h2>Examples:</h2>\n';
  html += '<p>Explain quantum computing in simple terms.</p>\n';
  html += '<p>Got any creative ideas for a 10 year old\'s birthday?</p>\n';
  html += '<p>How do I make an HTTP request in Javascript?</p>\n';
  html += '</body>\n';
  html += '</html>';
  respond.writeHead(200, {'Content-Type': 'text/html'});
  respond.write(html);
  respond.write('The date and time are currently: ' + dt.myDateTime());
  respond.end();
}).listen(8080);