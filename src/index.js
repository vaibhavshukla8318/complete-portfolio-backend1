const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Port on which the server will run

// Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// const routes = require('./routes');
// app.use('/api', routes); 

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

app.get("/", (req, res)=>{
  res.send("Hello World!");
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
