// WDD 131 - Week 1: Introduction to JavaScript and Variables
// This script updates the footer with the current year and the last modified date of the document.

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer span with id "currentyear"
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the last modified date in the footer paragraph with id "lastModified"
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
