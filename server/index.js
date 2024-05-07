const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the Angular directory
app.use(
  express.static(path.join(__dirname, "../dist/test-angular-node/browser"))
);

// Serve the Angular index.html file for any other routes
app.get("/test", (req, res) => {
  res.send("test");
});

// Serve the Angular index.html file for any other routes
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../dist/test-angular-node/browser/index.html")
  );
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
