const article = document.body;

const articleTitle = document.createElement('h2');
const articleAuthor = document.createElement('h5');
const articleContent = document.createElement('p');

let blog = JSON.parse(localStorage.getItem('Blog Item'));
let blogTitle = blog.title;
let blogAuthor = blog.username;
let blogContent = blog.content;

articleTitle.textContent = `${blogTitle}`
articleAuthor.textContent = `${blogAuthor}`
articleContent.textContent = `${blogContent}`

article.appendChild(articleTitle);
article.appendChild(articleAuthor);
article.appendChild(articleContent);

//body.innerHTML = `<h2> THis is a ${string} </h2>`