# Restaurant Booking Website - Client

## Overview
This is the frontend for the Restaurant Booking Website. It is built using React and ViteJS for a modern, fast user interface. The application uses Material UI for consistent and responsive design. It is deployed on Vercel with continuous deployment enabled.

---

## Screenshots

![restaurant-booking-client.vercel.app_.png](assets%2Frestaurant-booking-client.vercel.app_.png)


![restaurant-booking-client.vercel.app_ (1).png](assets%2Frestaurant-booking-client.vercel.app_%20%281%29.png)

![restaurant-booking-client.vercel.app_account_my-restaurants.png](assets%2Frestaurant-booking-client.vercel.app_account_my-restaurants.png)


![restaurant-booking-client.vercel.app_account_restaurant_26_.png](assets%2Frestaurant-booking-client.vercel.app_account_restaurant_26_.png)


![restaurant-booking-client.vercel.app_account_restaurant_26_ (1).png](assets%2Frestaurant-booking-client.vercel.app_account_restaurant_26_%20%281%29.png)

---

## Features
- **Responsive Design**: Mobile-friendly and accessible UI.
- **Booking Interface**: Allows users to browse and book available slots.
- **Restaurant Registration**: Allows users to register their own restaurants. 
- **Reservation Management**: Allows restaurant owners to list and manage reservations.
- **Restaurant Management**: Allows restaurant owners to manage their restaurant's information, photos and menu. 
- **Authentication**: Integrates with the backend for user login and registration.
- **Real-Time Feedback**: Dynamic updates and feedback for user actions.
- **Google Maps Integration**: Show restaurants location in embedded Google Maps using restaurant's address. 
- **Continuous Deployment**: Deployed on Vercel with continuous deployment.

---

## Tech Stack
- **Frontend Framework**: React (ViteJS)
- **UI Library**: Material UI
- **State Management**: TanStack React Query
- **Routing**: React Router
- **Deployment**: Vercel
- **Testing**: Vitest
- **CI/CD**: Continuous deployment using GitHub Actions

---

## Setup and Installation

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ozlemhafalir/restaurant-booking-client
   cd restaurant-booking-client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Environment Variables**:
   Copy `.env` file in the project root to `.env.local` and update with correct local configuration:
   ```bash
   cp .env .env.local
   ```
   Example local configuration:
   ```env
   VITE_API_HOST=http://127.0.0.1:8000
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## Deployment

The client is deployed on Vercel. Continuous deployment is set up to trigger whenever changes are pushed to the main branch.

## Folder Structure

```
client/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Application pages
│   └── main.jsx       # Main app component
├── public/            # Static assets
├── .env               # Environment variables
├── vite.config.js     # Vite configuration
└── package.json       # Project metadata and dependencies
```

---

## Available Scripts

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Automated Tests
```bash
npm run test
```
