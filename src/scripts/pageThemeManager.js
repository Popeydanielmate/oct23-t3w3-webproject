const themes = {
    light: {
        "theme-50":"#f7fbff",
		"theme-100":"#f0f6ff",
		"theme-200":"#e0eeff",
		"theme-300":"#d1e5ff",
		"theme-400":"#c2dcff",
		"theme-500":"#b3d4ff",
		"theme-600":"#6babff",
		"theme-700":"#2483ff",
		"theme-800":"#005fdb",
		"theme-900":"#004094",
		"theme-950":"#003170"
    },
    dark: {
        "theme-50":"#f7fbff",
		"theme-100":"#dbe9fc",
		"theme-200":"#000000",
		"theme-300":"#000000",
		"theme-400":"#000000",
		"theme-500":"#000000",
		"theme-600":"#000000",
		"theme-700":"#000000",
		"theme-800":"#000000",
		"theme-900":"#000000",
		"theme-950":"#000000"
    }
}



// Update #pageThemeHeading text
function updatePageThemeHeading(){
    let headingToUpdate = document.getElementById("pageThemeHeading");
    headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButton text
function updatePageThemeButtonText(){
    let buttonToUpdate = document.getElementById("pageThemeButton");

    let textToShow = "";

    if (getStoredPageTheme() == "dark"){
        textToShow = "Toggle to light mode";
    } else {
        textToShow = "Toggle to dark mode";
    }

    buttonToUpdate.textContent = textToShow;

}


// Add onclick to #pageThemeButton
function togglePageTheme(){
    if (getStoredPageTheme() == "dark"){
       pageTheme = "light";
    } else {
        pageTheme = "dark";
    }
    setPageThemeToStorage();
    
    applySavedTheme();
}

// Apply theme from localstorage
function applySavedTheme(){
	updatePageThemeButtonText();
	updatePageThemeHeading();
	updateCssVariables();
}


// Update CSS variables based on current theme
function updateCssVariables(){
    let themeName = getStoredPageTheme();
	// for every CSS variable in themes["light"]
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);
    }
}

let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);

applySavedTheme();