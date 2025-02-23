import express from 'express'

import {connectToDB, setupDB} from './model/setupDb'


const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {

  setupDB()
  console.log(`Server listening on port ${port}`);
});
