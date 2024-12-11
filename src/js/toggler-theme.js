import { theme, logoImage, logoYoda, LogoDarth, LogoDefault } from "./variables.js"
const themeLocal = localStorage.getItem('theme');

function getThemeLocalStorage() {


    if (themeLocal === null) {

        addThemeDefault()
    }

    else {

        getTheme(themeLocal)
    }


}

function addThemeDefault() {

    theme.classList.add('theme-red');
    localStorage.setItem('theme', 'theme-red');

}

function getTheme(themeLocal) {

    if (themeLocal === 'theme-red') {

        addTheme(themeLocal);
        logoImage.innerHTML = `<img src = ${LogoDarth} alt=""/>`

    }

    else if (themeLocal === 'theme-green') {

        addTheme(themeLocal);
        logoImage.innerHTML = `<img src = ${logoYoda} alt=""/>`

    }

    else {

        addTheme(themeLocal);
        logoImage.innerHTML = `<img src = ${LogoDefault} alt="imagem de logo" />`

    }



}

function togglerTheme() {


    if (theme.classList.contains('theme-default')) {

        removeTheme('theme-default');
        addTheme('theme-green')
        localStorage.setItem('theme', 'theme-green');
        logoImage.innerHTML = `<img src = ${logoYoda} alt=""/>`

    }

    else if (theme.classList.contains('theme-green')) {

        removeTheme('theme-green');
        addTheme('theme-red');
        localStorage.setItem('theme', 'theme-red');
        logoImage.innerHTML = `<img src = ${LogoDarth} alt=""/>`
    }

    else {

        removeTheme('theme-red');
        addTheme('theme-default')
        localStorage.setItem('theme', 'theme-default');
        logoImage.innerHTML = `<img src = ${LogoDefault} alt="imagem de logo" />`

    }


}

function removeTheme(colorTheme) {

    theme.classList.toggle(colorTheme);

}

function addTheme(colorTheme) {

    theme.classList.toggle(colorTheme);
}




export { togglerTheme, getThemeLocalStorage }