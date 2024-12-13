# MERN Stack Form with Tailwind CSS

This project is a simple MERN (MongoDB, Express, React, Node.js) stack application featuring a form styled with Tailwind CSS. The form allows users to input their details and submit them to a backend server.

## Features

- A frontend React form styled with Tailwind CSS.
- Backend server built with Express.js to handle form submissions.
- Seamless communication between frontend and backend using Axios.
- Displays a "Thank you for submitting!" message after successful form submission.

## File Structure

```
mern-form/
├── backend/
│   ├── server.js         # Express.js backend server
│   ├── package.json      # Backend dependencies
├── frontend/
│   ├── public/
│   │   ├── index.html    # Main HTML file
│   ├── src/
│   │   ├── components/
│   │   │   ├── Form.js   # React form component
│   │   ├── App.js        # Main React app
│   │   ├── index.js      # React entry point
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── package.json      # Frontend dependencies
```

## Prerequisites

Ensure you have the following installed:

- Node.js and npm
- MongoDB (optional, if integrating a database)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-form.git
   cd mern-form
   ```

2. Set up the backend:

   ```bash
   cd backend
   npm install
   ```

3. Start the backend server:

   ```bash
   node server.js
   ```

4. Set up the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

5. Start the frontend development server:

   ```bash
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your browser.
- Fill out the form and click submit.
- Check the terminal running the backend server to see the submitted data logged.

## Customization

- **Backend Endpoint**: The backend listens on `http://localhost:5000/submit`. Modify the `server.js` file for additional functionality.
- **Styling**: Tailwind CSS is used for styling. Update the styles in the `Form.js` component or the `tailwind.config.js` file as needed.
- **Deployment**: Deploy the backend using services like Heroku or AWS, and the frontend using platforms like Netlify or Vercel.

## Dependencies

### Backend

- `express`
- `body-parser`
- `cors`

### Frontend

- `react`
- `axios`
- `tailwindcss`
- `postcss`
- `autoprefixer`

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
