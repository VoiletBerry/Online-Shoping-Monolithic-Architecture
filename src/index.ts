import express from "express";

function startServer() {
  const PORT = 3000;

  const app = express();

  app
    .listen(PORT, () => {
      console.clear();
      console.log(`listening at port ${PORT}`);
    })
    .on("error", (error) => {
      console.log(error);
      process.exit();
    });
}

startServer();
