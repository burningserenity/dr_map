// Initialize express router
const express = require('express')
const router = express.router();

// Find all
router.get("/api", (req, res) => {
  console.log("/");
}).then(() => {
  res.send('find all');
});

// Find one
router.get("/api/:id", (req, res) => {
  console.log(req.params.id)
}).then(dbPlayer => {
  res.json(dbPlayer);
});

// Create
router.post("/", (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
}).then(dbPlayer => {
  res.json(dbPlayer);
});

// Update
router.put("/api/player/:id", (req, res) => {
  console.log(req.params.id);
}).then(dbPlayer => {
  res.json(dbPlayer);
});

// Delete
router.delete("/api/player/:id", (req, res) => {
  console.log(req.params.id);
}).then(dbPlayer => {
  res.json(dbPlayer)
});

module.exports = router;
