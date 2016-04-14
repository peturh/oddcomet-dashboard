var appServer = require("./webpack-server");
var apiServer = require("./apiserver");

const PORT = 9090;
const PROD = process.env.NODE_ENV === "production";

if (PROD) {
    apiServer(PORT);
} else {
    apiServer(PORT - 1);
    appServer(PORT);
}