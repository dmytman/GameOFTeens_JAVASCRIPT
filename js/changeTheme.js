const buttonChangerTheme = document.querySelector(".theme-button")
const link = document.getElementById("theme-link");

buttonChangerTheme.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let defaultTheme= "./css/defaultTheme.css";
    let darkTheme = "./css/blackTheme.css";
    const currTheme = link.getAttribute("href");
    if(currTheme === defaultTheme){
     link.setAttribute("href", darkTheme);  
     console.log("govno kod")
    };
    if(currTheme === darkTheme){    
       link.setAttribute("href", defaultTheme);  
       console.log("govno kod")
    };
}   