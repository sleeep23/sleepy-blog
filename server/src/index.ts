import express, {Request, Response } from 'express';

const app = express();

app.get('/', (req : Request, res : Response) => {
  res.send('Hello world!');
})

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});

