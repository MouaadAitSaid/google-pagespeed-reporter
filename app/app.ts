require('dotenv').config()
import express from 'express';
import routes from './routes/performances.route';


const app: express.Application = express();

app.use('/api',routes);


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});