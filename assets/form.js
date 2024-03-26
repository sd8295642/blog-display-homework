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
  