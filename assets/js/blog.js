const BlogForm = document.getElementById('BlogForm');

BlogForm.addEventListener('Submit', function(event){
    event.preventDefault();

    const Username = document.getElementById('Username').value;
    const Title = document.getElementById('Title').value;
    const Content = document.getElementById('Content').value;
    const blogPost = {
        Username: Username,
        Title: Title,
        Content: Content
    };
    const blogPostJSON = JSON.stringify(blogPost);

     localStorage.setItem('blogPost', blogPostJSON);
     window.Location.herf= 'blogpost.html';
}
 )

 function saveResponse() {
    let userSave = localStorage.getItem("Username");
    let titleSave = localStorage.getItem("Title");
    let ContentSave = localStorage.getItem("Content");
    Username.textcontent = userSave;
    Title.textcontent = titleSave;
    Content.textcontent = ContentSave;

    return
 }

 saveResponse();