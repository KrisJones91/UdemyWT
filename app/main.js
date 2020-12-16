// This file spins up an app and loads all the Controllers
//going to also give them access from the window to the controller

import PostController from "./Controllers/PostController.js";

class App {
    postController = new PostController();
}
//now create that APP and attach it to the window
window["app"] = new App();