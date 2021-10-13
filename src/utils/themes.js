// sourced from: https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeFontSize(multiplier) {
    // edit this with new font size variables so the accessbility toolbar can change the size
    localStorage.setItem('multiplier', multiplier);
    let basePage = 70;
    let baseText = 45;
    let baseDesc = 30;
    let baseFooterHeader = 18;
    let baseFooterLink = 16;
    basePage *= multiplier;
    baseText *= multiplier;
    baseDesc *= multiplier;
    baseFooterHeader *= multiplier;
    baseFooterLink *= multiplier;
    basePage = basePage.toString() + "px";
    baseText = baseText.toString() + "px";
    baseDesc = baseDesc.toString() + "px";
    baseFooterHeader = baseFooterHeader.toString() + "px";
    baseFooterLink = baseFooterLink.toString() + "px";
    document.documentElement.style.setProperty("--page-header-size", basePage);
    document.documentElement.style.setProperty("--text-header-size", baseText);
    document.documentElement.style.setProperty("--description-size", baseDesc);
    document.documentElement.style.setProperty("--footer-header-size", baseFooterHeader);
    document.documentElement.style.setProperty("--footer-link-size", baseFooterLink);
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

