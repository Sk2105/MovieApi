const movie = require("../data/movie.json");

module.exports = (req, res) => {
  const baseUrl = req.url;
  const baseUrlSplit = baseUrl.split("/");
   if (baseUrl == "/api/movie") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "json/application");
    res.write(JSON.stringify(movie));
  }else if (
    baseUrl.split("/").length == 4
  ) {
    const movieId = parseInt(baseUrlSplit[3]);
    if(movieId < 1 || movieId > 5){
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.write(
        JSON.stringify({
            message: "Movie id not found"
        })
      )
    }else{
        const movieEle = movie.filter((m) => m["id"] === movieId);
        res.statusCode = 200;
        res.setHeader("Content-Type", "json/application");
        res.write(
          JSON.stringify(movieEle)
        );
    }
    
  }  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Not Found");
  }

  res.end();
};
