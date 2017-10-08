import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Venue Hunt API');
});

app.get('/get-venues', (req, res) => {
  const location = req.query.searchTerm;
  axios({
    method: 'get',
    url: 'https://api.foursquare.com/v2/venues/explore',
    params: {
      client_id: process.env.FS_CLIENT_ID,
      client_secret: process.env.FS_CLIENT_SECRET,
      near: location,
      v: '20170801',
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(result => res.json(result.data.response))
    .catch(err => res.json({ message: 'Sorry, an error occured.', error: err }));
});

app.listen(port, () => {
  console.log(`Running on PORT: ${port}`);
});

export default app;
