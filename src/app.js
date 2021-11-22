import "regenerator-runtime";
import "jquery";
import "moment";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./app.css";
import "./app.js";
import "./scripts/clock.js";
import "./scripts/smooth.js";
import getNav from "./scripts/nav.js";

document.addEventListener("DOMContentLoaded", getNav());