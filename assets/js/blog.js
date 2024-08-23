function SaveResponse () {
    const posts = (localStorage.getItem('posts')|| '').split('|||');
    const NewPost = posts.length - 3;

    if (NewPost >=0) {
        document.getElementById('User').textContent = posts[NewPost] || '';
        document,getElementById('title').textContent = posts[NewPost] +1 || '';
        document,getElementById('title').textContent = posts[NewPost] + 2 || '';
    }

}
SaveResponse();