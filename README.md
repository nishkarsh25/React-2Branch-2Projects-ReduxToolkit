# FetchingDataFromApi Project

The "FetchingDataFromApi Project" is a React project designed to demonstrate fetching data from an API and implementing CRUD operations (Create, Read, Update, Delete) using Redux Toolkit. It showcases how to interact with a backend server to manage user data within a React application.

## Features

- **Fetching Users:** Utilizes the `useGetUsersQuery` hook to fetch a list of users from the API.
- **Adding Users:** Employs the `useAddUserMutation` hook to add a new user to the API.
- **Updating Users:** Utilizes the `useUpdateUserMutation` hook to update an existing user in the API.
- **Deleting Users:** Uses the `useDeleteUserMutation` hook to delete a user from the API.

## Additional Notes
- **Run the development server in VScode**:

   ```bash
   npx json-server db.json
   ```
- Ensure that the API server is running and accessible at `http://localhost:3000`.
- Customize and extend the functionality as needed to suit project requirements.
- This project serves as a foundational example for building more complex applications that interact with backend servers and manage application state efficiently.

## Live Demo

You can try out the live demo of the app [here](https://react-2branch-2projects-reduxtoolkit.onrender.com).

## Folder Structure

```
FetchingDataFromApi Project
│   README.md
│
├── src
│   ├── App.jsx
│   ├── Api.js
│   ├── index.css
│   ├── index.js
│   ├── Store.js
│   └── components
│       └── ...
│
└── node_modules
    └── ...


```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-2Branch-2Projects-ReduxToolkit/blob/FetchingDataFromApiProject/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

## GIF's

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/React-2Branch-2Projects-ReduxToolkit/blob/FetchingDataFromApiProject/Screenshots/ss2.gif" alt="Screenshot 1" width="1000"> 



## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux Toolkit:** An opinionated toolset for efficient Redux development, used for state management.
- **React Query:** A data-fetching library for React applications, providing caching, pagination, and real-time updates.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.

## Project Structure
- **App.jsx:** The primary component responsible for rendering the user interface and handling user interactions.
- **Api.js:** Defines API endpoints using Redux Toolkit's `createApi` function, enabling communication with the backend server.
- **index.css:** Contains global styles for the application, including font styles, colors, and layout configurations.
- **index.js:** The entry point of the application, rendering the `App` component into the DOM.
- **Store.js:** Configures the Redux store with middleware and reducers, integrating the API slice into the store.
- **components:** Contains reusable components used throughout the application for modularity and scalability.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/React-2Branch-2Projects-ReduxToolkit.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Install dependencies:

   ```bash
   npm install
   ```
4. Install json-server:

   ```bash
   npm install json-server
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Run the json server**:

   ```bash
   npx json-server db.json
   ```
   
3. **Open your browser** and navigate to http://localhost:5173 to view the app.
4. **Open your browser** and navigate to http://localhost:3000 to view the json server.

## How to Use

- **Adding Products to the Cart**: Browse the list of available products and click the "Add To Cart" button next to a product to add it to your shopping cart.
- **Updating Quantities**: In the shopping cart section, use the "+" and "-" buttons to increase or decrease the quantity of items.
- **Removing Items**: To remove an item from your shopping cart, click the "Remove" button next to the item.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

