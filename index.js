const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
	res.send(
		'Go to https://assignment-10-server-side-safayetalam.vercel.app/data for Chefs data.'
	);
});

app.get('/data', (req, res) => {
	res.send(data);
});

app.get('/data/:id', (req, res) => {
	const id = req.params?.id;
	const selectedData = data.find((d) => d.id == id);
	res.send(selectedData);
});

app.listen(port, () => {
	console.log(`This app listening on port ${port}`);
});
