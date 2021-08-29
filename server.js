const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("[OK] First setup");
});

app.listen(3000);

