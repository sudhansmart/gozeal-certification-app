# Certification App

## Overview

The **Certification App** is a React-based web application that allows users to manage certifications efficiently. Users can add certifications by providing details such as the certification name, issuer, and an uploaded file. The uploaded certificates can be viewed in a separate tab from the certification list.

## Features

- **Certification Form**:

  - Add a new certification by entering the certification name, issuer, and uploading a file.
  - View existing uploaded certificates using the "View" button.

- **Certification List**:

  - Displays a list of all uploaded certifications.
  - Click on "View Certification" to open the uploaded certificate in a new tab.

## Tech Stack

- **React.js**: Frontend framework
- **TypeScript**: Type safety and better development experience
- **Redux**: State management
- **Bootstrap**: Styling and responsive UI

## Installation

### Prerequisites

- Node.js (>=16.x.x)
- npm&#x20;

### Steps to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/certification-app.git
   cd certification-app
   ```
2. Install dependencies:
   ```sh
   npm install  

   ```
3. Start the development server:
   ```sh
   npm run dev  

   ```
4. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

## Project Structure

```
certification-app/
│-- src/
│   ├── components/   # Reusable components
│   ├── pages/        # CertificationForm, CertificationList
│   ├── redux/        # Redux store, actions, reducers
│   ├── assets/       # Static files like images
│   ├── App.tsx       # Main application component
│   ├── index.tsx     # Entry point
│-- public/           # Public assets
│-- package.json      # Project dependencies and scripts
│-- README.md         # Documentation
```

## Usage

1. Navigate to the **Certification Form** page to add a new certification.
2. Fill in the required details and upload a file.
3. Click "Submit" to save the certification.
4. Go to the **Certification List** page to view all saved certifications.
5. Click on "View Certification" to open the certificate in a new tab.

## Contributing

Feel free to fork this repository and submit pull requests to improve the app!

## License

This project is licensed under the MIT License.


