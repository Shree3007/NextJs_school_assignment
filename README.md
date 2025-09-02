# School Management App with Next.js and MySQL

This is a mini-project designed to manage school data, consisting of two main pages: one for adding school information and another for displaying a list of schools. The application is built using Next.js, React-Hook-Form for form handling and validation, Tailwind CSS for styling, and MySQL for database management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Database Setup](#database-setup)
- [Project Setup](#project-setup)
- [Usage](#usage)

## Features

-   **Add School Page (`/addSchool`)**:
    -   A responsive form to input and store school data (name, address, city, state, contact, image, email_id).
    -   Form validation using `react-hook-form` and `yup` (e.g., email format, 10-digit contact number, image size/type).
    -   Image upload functionality, storing images in a `public/schoolImages` folder.
    -   Live image preview on selection.
-   **Show Schools Page (`/showSchools`)**:
    -   Displays a list of schools in a responsive card-like layout, similar to an e-commerce product display.
    -   Each card shows the school's name, address, city, and image.
-   **Responsive Design**: Both pages and the navigation bar are designed to work well on various screen sizes (mobile and desktop).
-   **Persistent Navbar**: A consistent navigation bar across all pages with links to the home page, add school, and show schools, including a responsive hamburger menu for mobile.
-   **MySQL Integration**: Stores school data in a `schools` table in a MySQL database.

## Technologies Used

-   [Next.js](https://nextjs.org/) (React Framework)
-   [React](https://react.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [React Hook Form](https://react-hook-form.com/)
-   [Yup](https://yup.dev/) (Schema validation)
-   [MySQL](https://www.mysql.com/) (Database)
-   [mysql2](https://www.npmjs.com/package/mysql2) (MySQL client for Node.js)
-   [Lucide React](https://lucide.dev/)

## Database Setup

1.  **Create Database and Table**:
    -   Ensure you have a MySQL server running.
    -   Execute the SQL commands found in the `src/database.sql` file in your MySQL client (e.g., MySQL Workbench, phpMyAdmin, or MySQL CLI).

    ```sql
    CREATE DATABASE IF NOT EXISTS school_db;
    USE school_db;

    CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        contact VARCHAR(20) NOT NULL,
        image TEXT NOT NULL,
        email_id TEXT NOT NULL
    );
    ```

2.  **Update Database Credentials**:
    -   Open `src/lib/db.js`.
    -   Update the `user` and `password` fields in the `mysql.createConnection` object with your MySQL database credentials.

    ```javascript
    // src/lib/db.js
    const dbconnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // Your MySQL username
      password: 'your_mysql_password', // Your MySQL password
      database: 'school_db',
    });
    ```

## Project Setup

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <your-repository-url>
    cd nextjs-school-project
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Ensure correct file structure**:
    All components (`SchoolForm.jsx`, `SchoolCard.jsx`, `Navbar.jsx`) and utility files (`db.js`) are located within the `src/` directory. Pages and API routes are under `src/app/`.

## Usage

1.  **Start the development server**:
    ```bash
    pnpm dev
    ```

2.  **Access the application**:
    -   **Home Page**: `http://localhost:3000/`
    -   **Add School Page**: `http://localhost:3000/addSchool`
    -   **Show Schools Page**: `http://localhost:3000/showSchools`
