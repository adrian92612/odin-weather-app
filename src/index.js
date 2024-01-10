import "./style.css";
import * as ops from "./modules/ops";

const defaultLocation = "Manila";

ops.registerEvents();
document.querySelector("#search").value = defaultLocation;
document.querySelector("#btn-form").click();
