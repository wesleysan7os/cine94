import express from 'express';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts.js'
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 5000;

app.use(bodyParser.json()); 
app.use('/posts', postsRoutes); 

app.get('/', (req, res) => {
  res.redirect('/posts');
})

app.listen(PORT, () => {
  console.log(`Server runing on port: http://localhost:${PORT}`)
});