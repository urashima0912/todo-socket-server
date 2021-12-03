require("./database");
const { server, app } = require("./server");
server.listen(app.get("port"), () => console.log("server connected..."));
