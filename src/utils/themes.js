// sourced from: https://dev.to/abbeyperini/toggle-dark-mode-in-react-28c9

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeFontSize(multiplier) {
    localStorage.setItem('multiplier', multiplier);
    let currentPage = 70;
    let currentText = 45;
    let currentDesc = 30;
    console.log("currentPage:", currentPage);
    console.log("multiplier:", multiplier);
    currentPage *= multiplier;
    console.log(currentPage);
    currentText *= multiplier;
    currentDesc *= multiplier;
    currentPage = currentPage.toString() + "px";
    currentText = currentText.toString() + "px";
    currentDesc = currentDesc.toString() + "px";
    document.documentElement.style.setProperty("--page-header-size", currentPage);
    document.documentElement.style.setProperty("--text-header-size", currentText);
    document.documentElement.style.setProperty("--description-size", currentDesc);
}

function keepSize() {
    if (!localStorage.getItem('multiplier')) {
      changeFontSize(1);
    } else {
        let currentMult = localStorage.getItem("multiplier");
        currentMult = parseFloat(currentMult);
        changeFontSize(currentMult);
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

