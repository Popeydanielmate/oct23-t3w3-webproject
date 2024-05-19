// Declare JS data that we want to store
let cssThemes = [

];

let pageTheme = "dark";



/**
 * Retrieve, assign and return the latest stored CSS theme list from the localstorage
 *
 * @returns Array of objects
 */
function getStoredCssTheme(){
    // Update the cssTheme array
    let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
    cssThemes = JSON.parse(rawJsonStringCssThemes);
    // Return the updated data
    return cssThemes;
}


/**
 * Retrieve, assign and return the latest stored page theme from the localstorage
 *
 * @returns String. Should be "light" or "dark".
 */
function getStoredPageTheme(){
    pageTheme = localStorage.getItem("pageTheme");
    return pageTheme;
}

// Create/ Update the localstorage
function setCssThemeTostorage(){
    let dataAsJsonString = JSON.stringify(cssThemes);
    localStorage.setItem("cssThemes", dataAsJsonString);
}

function setPageThemeToStorage(){
    localStorage.setItem("pageTheme", pageTheme);
}

// Check if data exists,
// If it does, retrieve it,
// else, set default variables to localstorage

if (localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes").length > 0){
    getStoredCssTheme();
    getStoredPageTheme();
} else {
    setCssThemeTostorage();
    setPageThemeToStorage();
}

// Delete localstorage