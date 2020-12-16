// Gets information/requests from the controller applies all business logic and based on that returns certain data from the store
// let me creat this post object

import Post from "../Models/Post.js";
// need to import store for new post
import Store from "../store.js";



class PostService {
    delete(id) {
        let postIndex = Store.State.posts.findIndex(post => post.id == id)
        //now edit the state
        Store.State.posts.splice(postIndex, 1);
    }


    //because in the PostController we imported PostService which then said ok post service i need you to run the method createPost
    createPost(rawData) {
        console.log('creating post from service');
        //want to import Post to connect
        let newPost = new Post(rawData);
        //directly manipulating the store here
        // dont do this when using observers (bad pattern cause no one else knows that this ocurred)
        //store.State.posts.push(post)
        //spread operator says is take all contents of this array and empty them all out in this array (below)
        //storing current posts and new posts
        let posts = [...Store.State.posts, newPost];
        //"posts" is what we want to change.. and the date we want that to now be is posts
        Store.commit('posts', posts)

    }

}

const service = new PostService();
export default service;
//now anyone who requests that post service will immediately get a version of that Class
//who utilizes that will bring us to the Post Controller...