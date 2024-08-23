const BlogForm = document.getElementById('BlogForm');

BlogForm.addEventListener ('submit', function(event){
    event.preventDefault();

    const Username = document.getElementById('Username').value.trim();
    const Title = document.getElementById('Title').value.trim();
    const Content = document.getElementById('Content').value.trim();

    if (Username && Title && Content)
    {
        const blogpost = {
            Username: Username,
            Title: Title,
            Content: Content
        };

        let posts =JSON.parse(localStorage.getItem('posts'));
        posts.push(blogpost);
        localStorage.setItem('posts',JSON.stringify(posts));

        window.location.href = 'blogpost.html';
    }
});