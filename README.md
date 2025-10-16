# 🏘️ Näborly

[![Live Website](https://img.shields.io/badge/Live-Website-brightgreen)](https://comp1800-dtc04-1214c.web.app/)
[![Figma Design](https://img.shields.io/badge/Figma-Design-blue)](https://www.figma.com/file/UVVj9JKf3l5s2dm3ygJ6eH/Brainstorm-Smart-Cities)

![Demo](./assets/Demo.gif)

## Table of Contents

- [Summary](#summary)
- [Motivation](#motivation)
- [Requirements](#requirements)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Features](#features)
- [Project Structure](#project-structure)
- [Known Issues](#known-issues)
- [Future Features](#future-features)
- [Contributors](#contributors)
- [Gallery](#gallery)

## Summary

**Näborly** is a gamified web application designed to help newcomers strengthen their sense of belonging by promoting community involvement and exploration. Users can discover local quests, complete community activities, earn points, level up, and share their experiences through reviews. The app combines interactive mapping with a quest-based progression system.

## Motivation

This project was developed as a collaborative effort to address the challenges newcomers face when integrating into a community. As new residents of Vancouver ourselves, we noticed difficulties such as finding local events, meeting new people, and staying motivated to explore the city. We wanted to create an engaging, game-like experience that encourages users to discover their surroundings, participate in community activities, and build meaningful connections.

## Requirements

- Location services permission (required for quest distance calculations)

- Firebase project with Firestore, Authentication, and Storage configured

- Mapbox access token

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5.3.2, jQuery
- **Backend:** Firebase 8.10.0 (Firestore, Authentication, Storage)
- **Mapping:** MapboxGL JS
- **Additional:** Geolocation API, Firebase UI Auth

## Quick Start

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/izcheung/naborly.git
   cd naborly
   ```

2. **Configure Firebase:**

   - Update `scripts/firebaseAPI_DTC04.js` with your Firebase configuration
   - Ensure Firestore rules allow authenticated users to read/write
   - Set up Storage rules for image uploads

3. **Configure Mapbox:**

   - Add your Mapbox access token to the map initialization in `scripts/modules/quest_display.js`

4. **Start the application:**

   - Use a local server to serve `index.html` (e.g., Live Server extension in VS Code)
   - Ensure location services are enabled in your browser

5. **Access the application:**
   - Navigate to your local server URL
   - Allow location permissions when prompted
   - Sign up or log in to start exploring quests

## Features

### Interactive Mapping

- Real-time map display with user location
- Quest markers showing available activities
- Distance calculations to quest locations
- Toggle between map and list views

### Quest System

- **Quest Discovery:** Browse available community activities
- **Quest Management:** Accept, complete, or drop quests
- **Progress Tracking:** Visual indicators for quest status
- **Point Rewards:** Earn points for completing quests
- **Level Progression:** Level up system with increasing point requirements

### User Profiles

- Personal information management
- Profile picture uploads via Firebase Storage
- Quest preferences and interests
- Points and level tracking
- Completed quest history

### Review System

- Rate completed quests with stars and cost indicators
- Write detailed reviews and descriptions
- View community reviews for quests
- Timestamp tracking for reviews

### Authentication

- Firebase Authentication integration
- Email/password login system

## Project Structure

```
naborly/
├── images/                    # Application assets and icons
│   ├── complete-quest.png
│   ├── quest_pin.png
│   └── ...
├── reusable_html/            # HTML templates for reusable components
│   ├── bottom_nav.html
│   ├── quest_card.html
│   ├── top_nav_after_login.html
│   └── ...
├── scripts/                  # JavaScript functionality
│   ├── modules/
│   │   └── quest_display.js  # Core quest display and mapping logic
│   ├── authentication.js     # Firebase auth configuration
│   ├── firebaseAPI_DTC04.js  # Firebase initialization
│   ├── main_home.js          # Home page functionality
│   ├── main_search.js       # Search page functionality
│   ├── quest_detail.js      # Quest detail page logic
│   ├── quest_completion.js  # Quest completion and points system
│   ├── profile.js           # User profile management
│   ├── review.js           # Review system functionality
│   └── skeleton.js          # Reusable HTML loading
├── styles/                  # CSS styling
│   ├── main.css
│   ├── main_home.css
│   ├── quest_detail.css
│   └── ...
├── index.html               # Landing page
├── login.html              # Authentication page
├── main_home.html          # Main application interface
├── quest_detail.html       # Individual quest details
├── profile.html            # User profile page
├── review.html             # Quest review page
└── firebase.json           # Firebase hosting configuration
```

## Future Features

- **Location Verification:** Implement GPS checking for quest completion validation
- **Multi-Stage Quests:** Create quests requiring visits to multiple locations
- **User-Generated Content:** Allow high-level users to create and submit quests
- **Social Features:** Friend system and community boards
- **Enhanced Progression:** More detailed leveling system with rewards
- **Quest Editing:** Allow users to modify their completed quest history
- **Time Tracking:** Record completion timestamps and duration
- **Dynamic Ratings:** Quest ratings and costs are not yet dynamically generated from user reviews
- **Quest Sorting:** Users cannot yet sort quests by personal preferences

## Contributors

- **Irene Cheung**
- **Daylen Smith**
- **Tatsuya Yoshida**

## Gallery

### Landing Page

<img src="https://github.com/user-attachments/assets/afe68390-26c3-43ee-b2f4-d821abc6f6d0" width=200>

### Interactive Map

<img src="https://github.com/user-attachments/assets/a6031a0b-f92d-4ab8-b124-6cb207b82a0d" width=200>

### Quest List View

<img src="https://github.com/user-attachments/assets/e0a2a7ad-d64a-49bb-9040-5009a157bc93" width=200>

### Quest Details

<img src="https://github.com/user-attachments/assets/7769302d-770d-4b7a-a95e-b51f6758ca3a" width=200>

### Profile Page

<img src="https://github.com/user-attachments/assets/74ff9ce3-3adb-47cb-ab4c-ce9d0141cac9" width=200>
