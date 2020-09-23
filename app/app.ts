require('dotenv').config()
import express from 'express';
import routes from './routes/performances.route';
import path from 'path';



const app: express.Application = express();


app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use('/api',routes);


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});