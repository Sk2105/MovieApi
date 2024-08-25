const movie = require("../data/movie.json");
const bodyParser = require("../utils/body-parser");
const writeFileSync = require("../utils/write-to-file");

module.exports = (req, res) => {
  const baseUrl = req.url;
  const urlArr = baseUrl.split("/");
  console.log(urlArr);

  if (urlArr[1] === "api" && urlArr[2] === "delete_movie") {
    try {
      const id = parseInt(urlArr[3]);
        writeFileSync(movie.filter((m) => m.id != id));
        res.statusCode = 200;
        res.setHeader("Content-Type", "json/application");
        res.write(
          JSON.stringify({
            message: "Movie is successfully deleted",
          })
        );
     
    } catch (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.write(
        JSON.stringify({
          message: "Something went wrong",
          error: err.message,
        })
      );
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "json/application");
    res.write("Invalid URL");
  }
  res.end();
};
