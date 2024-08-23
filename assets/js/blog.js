const BlogForm = document.getElementById('BlogForm');

BlogForm.addEventListener('Submit', function(event){
    event.preventDefault();

    const Username = document.getElementById('Username').value.trim();
    const Title = document.getElementById('Title').value.trim();
    const Content = document.getElementById('Content').value.trim();
    
    if (Username && Title && Content)
    {
        const blogpost = '${Username}||${Title}||${Content}';

        let posts = localStorage.getItem(posts);
        posts = posts? posts + '||' + blogpost : blogpost;

        window.localStorage.href ='blogpost.html'
    }
    });
 
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