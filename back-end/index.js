import express from 'express';
import bodyParser from 'body-parser';
import blogsRoutes from './routes/blogs.js'

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); 
app.use('/blogs', blogsRoutes); 

app.get('/', (req, res) => {
  res.redirect('/blogs');
})

app.listen(PORT, () => {
  console.log(`Server runing on port: http://localhost:${PORT}`)
});