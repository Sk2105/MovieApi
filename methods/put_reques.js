const bodyParser = require("../utils/body-parser");
const writeFileSync = require("../utils/write-to-file");
const movie = require("../data/movie.json");

module.exports = async (req, res) => {
  const baseUrl = req.url;
  const urlArr = baseUrl.split("/");

  if (urlArr[1] === "api" && urlArr[2] === "update_movie") {
    const id = parseInt(urlArr[3]);
      try {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const newMovie = await bodyParser(req);
        const movies = movie.filter((m) => {
          if (m.id == id) {
            m.title = newMovie.title;
            m.year = newMovie.year;
            m.rating = newMovie.rating;
          }
          return m;
        });
        writeFileSync(movies);
        res.write(
          JSON.stringify({
            message: "Movie updated successfully",
            body: req.body,
          })
        );
      } catch (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.write(
          JSON.stringify({
            message: "Something went wrong",
            error: "Invalid Data " + err,
          })
        );
      }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.write("Invalid URL");
  }
  res.end()
};
