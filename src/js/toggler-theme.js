import { theme, logoImage, logoYoda, LogoDarthe, LogoDefault} from "./variables.js"


function togglerTheme(){
    
    
    if(theme.classList.contains('theme-default')){
        
        removeTheme('theme-default');
        addTheme('theme-green')
        logoImage.innerHTML =`<img src = ${logoYoda} alt=""/>`
        
    }
    
    else if(theme.classList.contains('theme-green')){
        
        removeTheme('theme-green');
        addTheme('theme-red');
        logoImage.innerHTML =`<img src = ${LogoDarthe} alt=""/>`
    }
    
    else{
        
        removeTheme('theme-red');
        addTheme('theme-default')
        logoImage.innerHTML =`<img src = ${LogoDefault} alt="imagem de logo" />`
        
    }
    
    
}

function removeTheme(colorTheme){
    
    theme.classList.toggle(colorTheme);
    
}

function addTheme(colorTheme){
    
    theme.classList.toggle(colorTheme);
}




export{togglerTheme}