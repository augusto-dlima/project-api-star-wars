import { theme, logoImage, logoYoda, LogoDarthe, LogoDefault,menuMobile,themeToggler,itemsMenuMobile} from "./variables.js"


let displayMobileMenu = false;



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




function toggleMenuMobile(){

    console.log(themeToggler.style.cssText="display:flex;")

    menuMobile.classList.toggle('background-menu-mobile');

    if(displayMobileMenu===false){

        itemsMenuMobile.style.cssText = "display:flex;transition: 5s ease-in-out;"
      
        displayMobileMenu=true;

    }

    else{

        itemsMenuMobile.style.display='none';
        themeToggler.style.display='none';
        displayMobileMenu=false;


    }
    
    
}



export{togglerTheme, toggleMenuMobile}