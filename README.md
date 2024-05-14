# Entain Technical Project

## **Introduction**

This Single Page Application (SPA) displays the "Next To Go Racing" table, mimicking the Neds.com.au website. The focus was on user experience, clarity of code, and simplicity in structure.

## **Preview**

[![Product Name Screen Shot][application-screenshot]](https://entain-technical-task.vercel.app/)
[![Product Name Screen Shot][applicationMobile-screenshot]](https://entain-technical-task.vercel.app/)
URL: <https://entain-technical-task.vercel.app/>

## **Task Requirements**

-   Create an SPA that displays 'Next to Go’ races using the Neds API.
-   Always display 5 races.
-   Sort races by time in ascending order.
-   Races should disappear from the list one minute past their start time (`advertised_start`).
-   Display meeting name (`meeting_name`), race number (`race_number`), and a countdown timer to the start of the race.
-   Users should be able to toggle race categories to view races only from selected categories.

## **Objective**

Successfully deploy a dynamic mockup of the Next To Go Racing Table, mirroring the user experience on the Ned's website homepage.

## **Features**

-   **API Integration**: Fetches data every 10 seconds for up-to-date race information.
-   **CORS Handling**: Uses an API proxy to avoid CORS errors when hosting on Vercel.
-   **Data Validation**: Utilises Zod schemas to validate incoming API data.
-   **State Management**: Employs React Query for managing the global state of the race table category selection.
-   **Dynamic Updates**: Information on 5 races is displayed continuously with updates for races that have started or been removed from the API.
-   **Sorting and Filtering**: Sort races by advertised start time or race number when times coincide. Filter races by category with interactive icons.
-   **UI Enhancements**: Includes an infinite loop hero carousel, a responsive sidebar with Ned's branding, and mobile-specific navigational elements.
-   **Countdown Timer**: Implements a race countdown timer with different displays for time remaining to increase urgency as the race start approaches.

## **Technology / Tools**

-   **Design Pattern**: Single Responsibility Principle
-   **Build Tools**: Vite, React, TypeScript
-   **Styling**: TailwindCSS
-   **Component Libraries**: Shadcn UI, Embla Carousel
-   **Routing**: React Router
-   **API Handling**: Axios
-   **Data Management**: React Query
-   **State Management**: Zustand
-   **Schema/Validation**: Zod
-   **Date/Time Handling**: Date-Fns
-   **Standards and Linting**: Prettier, ESLint

## **Installation**

Follow these steps to get your development environment set up:

1. **Clone the repository**

Open your terminal and clone the project repository using Git:
git clone <https://github.com/yourusername/Entain.git>
cd Entain

2. **Install dependencies**

npm install

3. **Start the development server**
   npm run dev

The application should now be running on <http://localhost:5173/>. Open this URL in your web browser to view the app.

## **Developer vs Deployment Enviroments**

This application is optimised for deployment on Vercel, leveraging an API proxy to address CORS issues when fetching data from the Neds API.

To successfully run the application in the development environment, specific changes are required:

-   **Development Settings**:
    -   Uncomment the line `baseURL: 'https://api.neds.com.au/rest/v1/racing',` in `src/utils/fetchApi.ts`.
    -   Uncomment the line `const response = await axiosApiInstance.get('/?method=nextraces&count=10');` in the same file.
    -   Comment out the line `baseURL: 'api/proxy',` and the line `const response = await axiosApiInstance.get('/');` in `src/utils/fetchApi.ts`.

Before deploying to production, ensure to revert these changes:

-   **Deployment Settings**:
    -   Comment the lines for direct API access (`baseURL: 'https://api.neds.com.au/rest/v1/racing',` and the respective axios get method).
    -   Uncomment the lines for using the API proxy (`baseURL: 'api/proxy',` and its axios get method) to mitigate CORS errors.

This toggle between configurations ensures that the application functions correctly in both local development and when deployed on Vercel.

## **Recommendations / Future Improvements**

-   Include real-time data per race and detailed information accessible via a draw panel.
-   Introduce a 'quick bet' button available when the countdown is below 1 minute.
-   Develop a panel to view recent races that have concluded.
-   Unit testing coverage for each component using Vitest.
-   Standardise design elements across the platform.
-   Create a mobile-specific interface designed for touch interactions, potentially using carousels for displaying race -information.

<!-- MARKDOWN IMAGES -->

[application-screenshot]: ./public/EntainMediaCard.webp
[applicationMobile-screenshot]: ./public/EntainMediaCardMobile.webp
