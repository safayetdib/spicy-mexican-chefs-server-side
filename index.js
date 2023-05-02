const express = require('express');
var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const data = require('./data/data.json');

app.get('/data', (req, res) => {
	res.send(data);
});

// app.get('/data/:id', (req, res) => {
// 	const id = req.params?.id;
// 	const selectedData = data.find((d) => d.id == id);
// 	res.send(selectedData);
// });

app.listen(port, () => {
	console.log(`This app listening on port ${port}`);
});
