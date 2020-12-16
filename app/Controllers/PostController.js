// The controller takes user input and calls to the service the attempt change data
//totally fine to get information from the store from the controller but CANNOT EDIT 

//allowing us to load this file because the controller will eventually need this
import PostService from "../Services/PostService.js";
import store from "../store.js";
//PRIVATE




function _draw() {
    //when do you want this draw to occur?
    //right away and everytime you create a post
    //go to constructor function
    let posts = store.State.posts;
    let templates = " ";
    posts.forEach(post => {
        templates += post.Template;
    });
    document.getElementById("posts").innerHTML = templates;
}



//Export is essentially everything that becomes PUBLIC

export default class PostController {
    constructor() {
        console.log("Building Controller");
        _draw();
    }
    // wiring the button to the controller
    // REMEMBER any interaction on the DOM should always go directly to a controller.(dot) directly to a service
    createPost(event) {
        event.preventDefault();
        let formData = event.target;
        let rawPost = {
            body: formData.body.value
        }
        PostService.createPost(rawPost);
        //(below)the reset will allow the place where we write in the post to reset whenever we submit the post.
        formData.reset();
        _draw();
    }


    delete(id) {
        PostService.delete(id);
        _draw();
    }
}
//this then takes us to main since we already exported to default