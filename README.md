# Premium Education Consultant Website

A modern, responsive personal website for an independent education consultant, built with React and Vite.

## Features

- **Premium Design**: Dark blue theme with gold accents and glassmorphism effects.
- **Dynamic College Directory**: Searchable and filterable list (Kerala) and accordion (Karnataka cities).
- **Responsive**: Fully optimized for mobile and desktop.
- **Easy Updates**: Data-driven college list for easy management.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## How to Update Data

### Colleges List
You can easily add, remove, or modify colleges by editing the file:
`src/data/colleges.js`

**Format:**
- **Kerala**: Add objects to the `keralaColleges` array.
- **Karnataka**: Add cities as keys to the `karnatakaColleges` object, and an array of college objects as the value.

### Images
Currently using placeholders. To update images:
1.  Place your images in `public/` or `src/assets/`.
2.  Update the `src` attribute in `src/components/Hero.jsx` and `src/components/About.jsx`.

## Customization

- **Colors**: Edit CSS variables in `src/index.css`.
- **Contact Info**: Update `src/components/Contact.jsx`.
