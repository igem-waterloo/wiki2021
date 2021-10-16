// sourced from: https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeFontSize(multiplier) {
    // edit this with new font size variables so the accessbility toolbar can change the size
    localStorage.setItem('multiplier', multiplier);
    let basePage = 50;
    let baseText = 35;
    let baseDesc = 15;
    let baseFooterHeader = 18;
    let baseFooterLink = 16;
    let mainHeadingDesc = 15;
    let mainSubHeading = 30;
    let mainDesc = 20;
    basePage *= multiplier;
    baseText *= multiplier;
    baseDesc *= multiplier;
    baseFooterHeader *= multiplier;
    baseFooterLink *= multiplier;
    mainHeadingDesc *= multiplier;
    mainSubHeading *= multiplier;
    mainDesc *= multiplier;
    basePage = basePage.toString() + "px";
    baseText = baseText.toString() + "px";
    baseDesc = baseDesc.toString() + "px";
    baseFooterHeader = baseFooterHeader.toString() + "px";
    baseFooterLink = baseFooterLink.toString() + "px";
    mainHeadingDesc = mainHeadingDesc.toString() + "px";
    mainSubHeading = mainSubHeading.toString() + "px";
    mainDesc = mainDesc.toString() + "px";
    document.documentElement.style.setProperty("--page-heading-size", basePage);
    document.documentElement.style.setProperty("--text-heading-size", baseText);
    document.documentElement.style.setProperty("--description-size", baseDesc);
    document.documentElement.style.setProperty("--footer-heading-size", baseFooterHeader);
    document.documentElement.style.setProperty("--footer-link-size", baseFooterLink);
    document.documentElement.style.setProperty("--main-page-heading-desc-size", mainHeadingDesc);
    document.documentElement.style.setProperty("--main-page-sub-heading-size", mainSubHeading);
    document.documentElement.style.setProperty("--main-page-description-size", mainDesc);
}

function keepSize() {
    if (!localStorage.getItem('multiplier')) {
      changeFontSize(1);
    } else {
        let baseMult = localStorage.getItem("multiplier");
        baseMult = parseFloat(baseMult);
        changeFontSize(baseMult);
    }
}

function keepTheme() {
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-dark');
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTheme('theme-light');
        }
    } else {
        setTheme('theme-dark');
    }
}

module.exports = {
  setTheme,
  keepTheme,
  keepSize,
  changeFontSize
}

