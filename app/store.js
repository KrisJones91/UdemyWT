// The goal of the Store is to HOLD all the data for the entire application
// Store holds all of the models based on the data provided
// I'm gonna have a list or array of posts, i want to make sure I have each of those things as a post


//the state holds all the data(_ because this is PRIVATE)

//need to get the _state.. push it into that posts[]array.. then commit to save the date of that array
let _state = {
    posts: []
};
//need a way to get the information from the state
class Store {
    //when putting a getter function on here.. treats state as a property
    //able to invoke any instance we have in the store
    get State() {
        return _state;
    }

    //need a way to say change that information
    //first need a property to call that (prop ->meaning posts)
    commit(prop, data) {
        //only real goal is to validate everything through
        _state[prop] = data;
    }

}

//NOTICE - we haven't exported the store - REASON: i only want a single instance of the store throughout entire application 
const store = new Store();
export default store;
