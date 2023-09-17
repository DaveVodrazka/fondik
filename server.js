/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 443;

app.get('/fondik/main.js', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'main.js'));
});

// generate your own SSL keys
const credentials = {
	key: fs.readFileSync('./ssl/key.pem'),
	cert: fs.readFileSync('./ssl/cert.pem'),
};

const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
