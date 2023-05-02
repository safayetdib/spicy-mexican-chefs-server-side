const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const data = require('./data/data.json');

app.get('/data', (req, res) => {
	res.send(data);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
