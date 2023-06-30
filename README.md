# Mood Tracker

[![wakatime](https://wakatime.com/badge/user/17993a3c-e23b-43ce-a9c6-84b6248d1411/project/4721a16a-d0de-43f4-a904-7e529178b4ed.svg)](https://wakatime.com/badge/user/17993a3c-e23b-43ce-a9c6-84b6248d1411/project/4721a16a-d0de-43f4-a904-7e529178b4ed) 

## Description

This is a mood tracker app that allows users to track their mood and activities.


## Features

* ![React.js](https://img.shields.io/badge/18.2.0-ReactJS-blue) for the front-end
* ![Next.js](https://img.shields.io/badge/13.2.3-NextJS-yellow) for server-side rendering
* ![FireBase](https://img.shields.io/badge/13.2.3-NextJS-red) as a database
* ![Clerk](https://img.shields.io/badge/^4.21.12-Clerk-purple) for authentication
* ![Mantine](https://img.shields.io/badge/6.0.0-Mantine-blue) for styling
* ![Chart.js](https://img.shields.io/badge/3.5.1-ChartJS-green) for data visualization
* ![Moment](https://img.shields.io/badge/^2.29.4-Moment-orange) for date formatting

and more...

## Installation

To install this app, download the repository and run commands:

Required Firebase and Clerk API keys are stored in a `.env.local` file in the root directory of the project. The file should look like this:

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJ_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MSG_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...
```

### Development

```
npm i
npm run dev
```

### Production

```
npm i
npm run build
npm run start
```