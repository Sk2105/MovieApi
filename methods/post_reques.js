const movie = require("../data/movie.json");
const bodyParser = require("../utils/body-parser");
const writeFileSync = require("../utils/write-to-file");

module.exports = async (req, res) => {
  console.log(req.url);
  console.log(req.body);
  if (req.url == "/api/add_movie") {
    try {
      res.statusCode = 200;
      const m = await bodyParser(req);
      console.log(m);
      movie.push(m)
      
      writeFileSync(movie);
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ message: "Movie added successfully", body: req.body })
      );
    } catch (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.write(
        JSON.stringify({
          message: "Something went wrong",
          error: "Invalid Data "+err,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.write("Invalid URL");
  }
  res.end();
};
