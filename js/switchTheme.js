const buttonChanger = document.querySelector(".theme-button")
const link = document.getElementById("theme-link");

buttonChanger.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let defaultTheme= "./css/default-theme.css";
    let darkTheme = "./css/black-theme.css";
    let currTheme = link.getAttribute("href");
    if(currTheme === defaultTheme){
     link.setAttribute("href", darkTheme);  
    }
    if(currTheme === darkTheme){    
       link.setAttribute("href", defaultTheme);  
    }
}   