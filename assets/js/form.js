const Username = document.querySelector('#username');
const BlogTitle = document.querySelector('#Title');
const BolgContent = document.querySelector('#Content');
const button = document.querySelector('#submit');

let UsernameArray = [];
let BlogTitleArray = [];
let BolgContentArray = [];

button.addEventListener('click', function(event) {
    event.preventDefault()

  const UsernameValue = Username.Value.trim();
  const TitleValue = Title.value.trim();
  const ContentValue = Content.Value.trim();

  if (UsernameValue && TitleValue && ContentValue){

    SaveToLocalStorage('Username', UsernameValue)
    SaveToLocalStorage('TiTle' , TitleValue);
    SaveToLocalStorage('content', ContentValue);
    
    window.location.href = 'blog.html'
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