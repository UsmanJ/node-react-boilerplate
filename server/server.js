import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes';

const envConfig = dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const mongoDB = `mongodb://${process.env.DB_USER}:${
  process.env.DB_PASS
}@ds261155.mlab.com:61155/tarrifs-eu`;
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  next();
});

app.use('/api', routes);

app.use((req, res) => {
  res.status(404).send('Sorry, this API does not exist.');
});

app.listen(port, () => {
  console.log(`Running on PORT: ${port}`);
});

export default app;
