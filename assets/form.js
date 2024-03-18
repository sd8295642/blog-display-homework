const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

const blogArray = [];

function createBlogObject() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value, 
        content: contentInput.value,
    }
    blogArray.push(blog);
    localStorage.setItem('Blog Item', JSON.stringify(blog));
};

const formAdd = document.getElementById('form-btn');

formAdd.addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    if (usernameInput.value == "" || titleInput.value == "" || contentInput.value == "") {
        alert(`Please complete the form`);
    }

    else{
    createBlogObject();

    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";

    window.location.href ="./blogdisplay.html"
    }
});
  

//need to append blog to blogs(?) see activity 26
//need an event listener to listen to submit button and go to another page then
//look at the bubble up activity to see how to do a window.location.href to go from the form to the blog, make back button too