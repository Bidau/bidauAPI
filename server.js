const express = require("express");
cosnt app = express();

app.get("/", (req, res) => {
	res.send("[OK] First setup");
});

app.listen(3000);

