const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => {
		console.log(`I DO BE HERE ${PORT}`);
	});
});

app.listen(PORT, () => {
    console.log(`Imma port ${PORT}`);
});
