

https://github.com/user-attachments/assets/a24661bc-eee5-4d29-810a-5bdbd0a225a9





https://github.com/user-attachments/assets/dbdab80b-146d-4e30-9109-dedd5a901e10





https://github.com/user-attachments/assets/e3793a61-0ade-4343-87ec-412803e545d2








# Learning Management System (LMS) - MERN Stack

A modern **Learning Management System (LMS)** built using **Vite + React**, **Tailwind CSS**, **Shadcn UI**, **Express**, and **MongoDB**. This system features user authentication, instructor management, and PayPal integration for secure payments. It offers a responsive design, scalable backend, RESTful API, and is easily customizable to fit various needs.

## Features

- **User Authentication**: Register, login, and logout functionality.
- **Instructor Management**: Manage and assign courses to instructors.
- **PayPal Integration**: Secure payment system for course purchases.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Scalable Backend**: Built with Express and MongoDB to handle growing needs.
- **RESTful API**: Easily integrates with other services and front-end applications.
- **Customizable**: Modify the system to suit your specific requirements.

## Technologies Used

- **Frontend**: Vite, React, Tailwind CSS, Shadcn UI
- **Backend**: Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payments**: PayPal API

## Installation

### Prerequisites

Before getting started, ensure you have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB (local or cloud)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamed-osamaaa/learning-management-system-LMS-.git
   ```

2. Navigate into the project directory:
   ```bash
   cd learning-management-system-LMS
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

5. Set up environment variables for both frontend and backend. Make sure you create a `.env` file in both the `backend` and `frontend` directories and add the necessary configurations (e.g., PayPal client ID, MongoDB connection string).

6. Start the backend:
   ```bash
   cd backend
   npm run dev
   ```

7. Start the frontend:
   ```bash
   cd ../frontend
   npm run dev
   ```

8. Visit `http://localhost:3000` in your browser to access the LMS.
