// an object that holds all the information for the data needed per object
// going to hold a single post object
// identify the things we want to put on a post
//put a template in there so anytime we want to update
// only ever going to have one class per folder

//changed parameter from body to data... changed this.body = body to this.body=data.body to take in that data knowledge (Udemy: Using Forms for reference)
export default class Post {
    constructor(data) {
        this.id = data.id || generateId();
        this.body = data.body;
        //returns a number essentially 
        //this.date = Date.now();
        //added data.date because object may already have a date on it and don't want to create a new one.
        //if data.date has that value on the object, use the value... if not create the new date.
        this.date = data.date || new Date().toLocaleDateString("en-Us");
    }
    //space between to utilize the getter (which fakes a property)
    get Template() {
        //big thing here is that further idea of encapsulation that all of my like concerns are together(data of post is here as well as string and information as to how do I RENDER that post in the HTML)
        return `
        <div class="post">
            <h4>${this.date}</h4>
            <p>
            ${this.body}
            </p>
            <button onclick="app.postController.delete(${this.id})">Delete</button>
        </div>
        `;
    }
}


function generateId() {
    return Math.floor(Math.random() * 100000);
}