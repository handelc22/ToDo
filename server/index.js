const express = require('express');
const tapHeaders = require('tap-headers');

const app = express();

app.use(tapHeaders());

// app.get('/', (req, res) => {
//   res.send('working?')
// })

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('server listening on port 3000!');
});
