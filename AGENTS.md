# Library

Static vanilla HTML/CSS/JS project. No build step, no package manager, no tests, no linting.

## Structure

- `index.html` - entry point (open in browser)
- `Files/logic.js` - all application logic (Book class, library CRUD, DOM manipulation)
- `Files/styles.css` - all styling

## Running

Open `index.html` directly in a browser, or serve with any static file server. There is no build or dev server.

## Notes

- All state lives in the `myLibrary` array in `Files/logic.js` (in-memory only, no persistence)
- DOM is manipulated directly via vanilla JS (no framework)
