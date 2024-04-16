// import { render, screen } from '@testing-library/react';
// import App from './App';
// import { createRoot } from 'react-dom/client';

// const container = document.getElementById('app');
// const root = createRoot(container);  
// root.render(<App />);

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });



  
// const container = document.getElementById('app');
// const root = createRoot(container);  
// root.render(<App />);



// import React from "react";
// import ReactDOM from "react-dom/client"; // Import from react-dom/client
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals(); 


import React from "react";
import ReactDOM from "react-dom/client"; // Import from react-dom/client
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();


