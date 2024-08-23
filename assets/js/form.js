const BlogForm = document.getElementById('BlogForm');

BlogForm.addEventListener ('submit', function(event){
    event.preventDefault();

    const Username = document.getElementById('Username').value.trim();
    const Title = document.getElementById('Title').value.trim();
    const Content = document.getElementById('Content').value.trim();

    if (Username && Title && Content)
    {
        const blogpost = '${Username}|||${Title}|||${Content}';
        let posts = localStorage.getItem('posts');
        posts = posts ? posts + '|||' + blogpost : blogpost;
        localStorage.setItem('posts',posts);

        window.location.href = 'blogpost.html';
    }
});