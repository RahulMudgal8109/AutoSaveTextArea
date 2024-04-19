let savedText = localStorage.getItem('textFromTextarea')

if(savedText){
    document.getElementById('textArea').value = savedText
}



function getText() {
    let textarea = document.getElementById("textArea");
    
    let text = textarea.value;
    console.log(text);
    
    localStorage.setItem('textFromTextarea', text);
  }



  
  