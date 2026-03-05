const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

let visitors = 0;

app.get("/", (req, res) => {
    visitors++;

    res.send(`
        <h1>Azure Dynamic Web Application</h1>
        <p>Current Time: ${new Date()}</p>
        <p>Total Visitors: ${visitors}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});