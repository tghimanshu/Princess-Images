# Future Plan

This document outlines the roadmap for the Princess Images Slideshow project. Phase 1 represents the current stable state of the application. Phase 2 lists potential enhancements and features for future development.

## Phase 1: Foundation (Completed)

The current version of the application includes the following core features:

*   **Three.js Scene Setup**: Basic scene, camera, renderer, and lighting.
*   **Image Loading**: Dynamic loading of 30+ images as textures on 3D planes.
*   **Navigation**: Keyboard-based navigation (Arrow keys) with GSAP animations for smooth transitions.
*   **Audio Integration**: Context-aware audio playback that changes tracks or timestamps based on the current slide.
*   **HTML Overlay**: synchronized text titles and subtitles overlaying the 3D scene.
*   **Documentation**: Comprehensive code documentation and usage guide.

## Phase 2: Enhancements & Features (Proposed)

The following features are planned for the next iteration to improve user experience, performance, and maintainability.

### 1. User Interface & Experience (UI/UX)
*   **Touch Gestures**: Add swipe support for mobile devices (touch screen navigation).
*   **On-screen Controls**: Add visible "Next/Previous" buttons for mouse users.
*   **Loading Screen**: Implement a loading progress bar or splash screen to handle asset loading (textures and audio) gracefully.
*   **Responsive Layout**: Improve the CSS layout for title/subtitle text to ensure legibility on all screen sizes, especially mobile.

### 2. Visual Improvements
*   **Advanced Transitions**: Explore more complex shader-based transitions between images instead of simple camera movement.
*   **Background Effects**: Add particle systems or dynamic backgrounds to enhance the visual appeal.
*   **Post-processing**: Implement Three.js post-processing effects (bloom, depth of field, etc.).

### 3. Content Management
*   **Dynamic Configuration**: Load slide data (titles, subtitles, audio mapping) from an external JSON file instead of hardcoding it in `main.js`.
*   **Asset Optimization**: Implement lazy loading for images to improve initial load time, or use compressed texture formats (e.g., KTX2, WebP).

### 4. Codebase & Architecture
*   **Modularization**: Split `main.js` into smaller modules (e.g., `SceneManager`, `AudioManager`, `InputHandler`) for better maintainability.
*   **TypeScript Migration**: Convert the codebase to TypeScript for better type safety and developer experience.
*   **Unit Testing**: Add tests for logic-heavy parts like state management and data processing.

### 5. Deployment
*   **CI/CD Pipeline**: Set up automated building and deployment (e.g., via GitHub Actions).
*   **PWA Support**: Turn the application into a Progressive Web App (PWA) for offline capabilities.
