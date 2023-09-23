import express from 'express';
const PORT = process.env.PORT || 3001;

const app = express();

app.use('./scripts', express.static('./public/scripts'));


app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle API</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})