const Username = document.querySelector('#username');
const BlogTitle = document.querySelector('#Title');
const BolgContent = document.querySelector('#Content');
const button = document.querySelector('#submit');

let UsernameArray = [];
let BlogTitleArray = [];
let BolgContentArray = [];

submitButton.addEventListenr('click' , function(Event)) {
    Event.preventDefault();
    
    UsernameArray.push(Username.ariaValueMax.trim());
}
 
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