function Display (){
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const NewPost = posts[posts.lenght -1] || {};

    document.getElementById('user').textContent = NewPost.Username || '';
    document.getElementById('title').textContent = NewPost.Tittle || '';
    document.getElementById('content').textContent = NewPost.Content || '';
}

Display();