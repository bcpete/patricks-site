const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var mailgun = require('mailgun-js')({apiKey: `${process.env.MAILGUN_API_KEY}`, domain: `${process.env.MAILGUN_DOMAIN}`});

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/email', (req, res) => {
  var data = {
    from: '$$Website User$$ <me@samples.mailgun.org>',
    to: 'beardpatrick80@gmail.com',
    subject: `New Business Inquiry from ${req.body.name}`,
    text: `Email ${req.body.email} \n Phone: ${req.body.phone} \n Message: ${req.body.message}`
  }
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
  });
})

app.listen(PORT, () => {
  console.log('server is up on port 3000');
});