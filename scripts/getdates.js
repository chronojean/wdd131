function setDates() {
    const currentYear = new Date().getFullYear();
    const yearElem = document.getElementById('currentyear');
    if (yearElem) {
        yearElem.textContent = currentYear;
    }

    const lastModified = document.lastModified;
    const lastModifiedElem = document.getElementById('lastModified');
    if (lastModifiedElem) {
        lastModifiedElem.textContent = `Last Modification: ${lastModified}`;
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setDates);
} else {
    setDates();
}
