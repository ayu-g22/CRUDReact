# Web Application with Dynamic UI, User Management, and Chart Visualization

This project is a web application that features a dynamic UI with a sidebar, navbar, user management (CRUD operations), and a chart visualization. The app allows users to view, add, edit, and delete user information, while also displaying a bar chart of data fetched from an API.

## Features

### 1. Navbar
A responsive navigation bar at the top of the app.

### 2. Sidebar
A fixed sidebar that remains in place while scrolling through the page content.

### 3. Users Table
Displays a list of users fetched from an API.

Supports CRUD operations:
- **Add**: Opens a form to add a new user.
- **Edit**: Allows editing of existing user details.
- **Delete**: Deletes a user from the list.

### 4. Chart
A bar chart visualizing sales data using Chart.js and react-chartjs-2.

Displays monthly sales data fetched from an API.

## Technologies Used

- React.js
- Axios (for API calls)
- Chart.js & react-chartjs-2 (for chart visualization)
- Tailwind CSS (for styling)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ayu-g22/CRUDReact
   ````

2. Install dependencies::
    ````bash
    npm install
    ````

3. Start the development server:
    ````bash
    npm start
    ````
## Usage
    
    -Navigate to the app in your browser at http://localhost:3000 (or the port specified by your environment).
    -Use the sidebar to navigate.
    -Manage users via the Users Table (Add, Edit, Delete).
    -View the chart displaying covid-19 data.
## CRUD Operations
    Add User
    -Click the "+" button to open the form.
    -Fill in the user details and click "Add User".
    Edit User
    -Click the "Edit" button next to the user you want to edit.
    -Modify the user details and click "Update".
    Delete User
    -Click the "Delete" button next to the user you want to remove.
    -Confirm the deletion.

## Chart Data
The chart visualizes monthly sales data fetched from an API. The bar chart is responsive and adjusts to the viewport.

## Video Demonstration
For a complete walkthrough of the app's features and functionality, please watch the following video:
https://www.loom.com/share/186b8bfedfe34fe4819789f7c054d10e?sid=bb571cd8-3834-466c-b335-fcc8b1a2136a