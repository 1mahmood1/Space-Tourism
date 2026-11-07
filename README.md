# Space Tourism Website

A responsive space tourism website built with React. Explore space destinations, meet the crew, and learn about the technology behind each mission through an interactive, mobile-friendly interface.

## Overview

This project presents a fictional space tourism experience with four main areas: a home page, destination pages, crew profiles, and technology information. The interface is designed to adapt to desktop, tablet, and mobile screens.

The content is stored locally in a JSON file and displayed through reusable React components. Client-side routing provides navigation between the different sections without full-page reloads.

## Features

- **Responsive layout:** Adapts the interface for desktop, tablet, and mobile screens.
- **Destination exploration:** Browse information about the Moon, Mars, Europa, and Titan, including descriptions, travel distance, and estimated travel time.
- **Crew profiles:** Read profiles for Douglas Hurley, Mark Shuttleworth, and Victor Glover.
- **Space technology:** Explore the launch vehicle, spaceport, and space capsule sections.
- **Client-side navigation:** Move between pages using React Router, with active navigation states for the main sections.
- **Mobile navigation menu:** Open and close the navigation panel on smaller screens.
- **Touch gestures:** Swipe between items in the destination, crew, and technology sections on touch devices.
- **Motion effects:** Animated interface elements and transitions add visual feedback.
- **Animated star field:** A decorative star background creates a space-themed atmosphere.
- **Reusable components:** Shared components render repeated layouts and keep page content organized.

## Technology Stack

- **React** — component-based user interface.
- **React Router** — client-side routing and navigation.
- **Vite** — development server and production build tooling.
- **Tailwind CSS** — utility-first styling and responsive layouts.
- **Motion** — interface animations and transitions.
- **react-swipeable** — touch swipe gesture handling.
- **JSON** — local content for destinations, crew members, and technology.

The interface also uses the Barlow, Barlow Condensed, and Bellefair typefaces.

## Project Structure

```text
src/
├── assets/
│   ├── crew/
│   ├── destination/
│   ├── home/
│   ├── shared/
│   └── technology/
├── components/
│   ├── CrewBody.jsx
│   ├── DestinationBody.jsx
│   ├── Header.jsx
│   ├── HomeBody.jsx
│   ├── TechnologyBody.jsx
│   └── ...
├── data/
│   └── data.json
├── pages/
│   ├── Home.jsx
│   ├── Destination*.jsx
│   ├── Crew*.jsx
│   └── Technology*.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Move into the project directory:

```bash
cd <project-folder>
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run lint` | Runs Oxlint on the project. |

## Routes

| Section | Route |
| --- | --- |
| Home | `/` |
| Moon | `/destination/moon` |
| Mars | `/destination/mars` |
| Europa | `/destination/europa` |
| Titan | `/destination/titan` |
| Douglas Hurley | `/crew/douglas-hurley` |
| Mark Shuttleworth | `/crew/mark-shuttleworth` |
| Victor Glover | `/crew/victor-glover` |
| Launch Vehicle | `/technology/launch-vehicle` |
| Spaceport | `/technology/spaceport` |
| Space Capsule | `/technology/space-capsule` |

## Notes

This is a front-end project. Its destination, crew, and technology content is provided by local JSON data; no backend or database is required to run the current version.
