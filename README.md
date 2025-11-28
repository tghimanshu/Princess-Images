# Princess Images Slideshow

A 3D interactive slideshow application built with Three.js, GSAP, and Vite. This project displays a sequence of images (slides) with accompanying titles and subtitles, synchronized with background audio tracks.

## Features

*   **3D Image Gallery**: Images are rendered as 3D planes in a Three.js scene.
*   **Smooth Transitions**: Camera and DOM element transitions are animated using GSAP.
*   **Audio Synchronization**: Specific slides trigger different audio tracks or change playback positions.
*   **Keyboard Navigation**: Navigate through slides using Arrow Up and Arrow Down keys.
*   **Responsive Design**: The canvas resizes to fit the window dimensions.

## Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/) (version 16 or higher)
*   [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd princess-images
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Development

To start the development server with hot module replacement:

```bash
npm run dev
```

Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:3000`).

### Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be generated in the `dist` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

### Controls

*   **Arrow Down**: Move to the next slide.
*   **Arrow Up**: Move to the previous slide.
*   **Space**: Play/Pause the background audio.

## Project Structure

*   `main.js`: The main entry point containing the Three.js scene setup, logic, and event handlers.
*   `style.css`: Global styles for the HTML overlay and canvas.
*   `index.html`: The HTML entry point.
*   `princess-images/`: Directory containing the image assets for the slideshow.
*   `audios/`: Directory containing the audio tracks.
*   `vite.config.js`: Configuration file for Vite.

## Dependencies

*   [Three.js](https://threejs.org/): 3D library for rendering the scene.
*   [GSAP](https://greensock.com/gsap/): GreenSock Animation Platform for smooth animations.
*   [dat.gui](https://github.com/dataarts/dat.gui): A lightweight GUI for changing variables in JavaScript (used for debugging/tweaking).
*   [Vite](https://vitejs.dev/): Next generation frontend tooling.

## License

This project is private.
