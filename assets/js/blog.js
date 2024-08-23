function Display (){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const NewPost = posts[posts.lenght -1] || {};

    document.getElementById('user').textContent = NewPost.Username || '';
    
}