Reviews Component

<img width="1891" height="900" alt="image" src="https://github.com/user-attachments/assets/b14aadde-586c-48ef-939a-aec257d2426c" />
<img width="1897" height="902" alt="image" src="https://github.com/user-attachments/assets/53ad107d-0cd1-4261-8838-0a0bf63e36ff" />

This component is built with React.js & TailwindCSS. 

1.) Install dependencies
npm i

2.) Run Frontend
npm run dev

3.) Run JSON Server
npm i json-server
npx json-server ./src/assets/data/data.json --port 8000

Front-end development server is configured to run on port 3000 whereas back-end development server is configured to run on port 8000. Also proxying is done through Vite.

The data is fetched via FETCH API.

Dynamic functionality is given as you can post or remove reviews from the app, authenticate inputs as well as a spinner put in place during data fetching.



