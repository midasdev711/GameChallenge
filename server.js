const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');
const request = require('request');

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

const ES_URL = "https://elastic:j9R4XlrzV0DzoJNqHuwvsPR8@9c5abe0f931b49d5b8240cf7f59606ee.us-east-1.aws.found.io:9243/doctors/_search";

app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

app.get('/', function (req, res) {
  res.render(path.join(__dirname + '/dist/index.html'));
});

app.post('/api/doctors/_search', function (req, res) {
  request.post({
    headers: {'Content-Type': 'application/json'},
    url: ES_URL,
    body: JSON.stringify(req.body)
  }, (error, response, body) => {
    console.log(error);
    res.json(JSON.parse(body));
  });
})

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});