const express = require("express");
const app = express();

app.use(express.static("public")); // Serve static files (optional)

app.get("/", (req, res) => {
    res.send("Hello from Funky Tutors!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
