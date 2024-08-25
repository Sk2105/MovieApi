module.exports = (req) => {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        body = JSON.parse(body);
        resolve(body);
      } catch (err) {
        reject(err);
      }
    });
  });
};
