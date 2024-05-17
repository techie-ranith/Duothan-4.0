# AI-Driven Talent Acquisition Platform
Welcome to the AI-Driven Talent Acquisition Platform repository! This platform is designed to revolutionize the recruitment process for businesses by leveraging advanced AI technologies. Below you'll find an overview of the product and instructions for setting up the MERN (MongoDB, Express.js, React.js, Node.js) stack for both the client and server sides.
## Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend (Express.js)](#backend-expressjs)
  - [Frontend (Next.js)](#frontend-nextjs)
- [Running the Servers](#running-the-servers)
- [Contributing](#contributing)
- [License](#license)
## Overview
The AI-Driven Talent Acquisition Platform aims to streamline and enhance the recruitment process through AI-powered candidate screening, job matching, and analytics. It provides an efficient and effective way for businesses to find the right talent while minimizing manual effort.
## Technologies
- *Backend*: Node.js, Express.js, MongoDB
- *Frontend*: React.js (Next.js)
- *AI/ML*: Integrated within the backend services for candidate matching and analytics
## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher)
## Setup Instructions
### Backend (Express.js)
1. *Clone the repository*:
    bash
    git clone https://github.com/yourusername/ai-talent-acquisition-platform.git
    cd ai-talent-acquisition-platform/backend
    
2. *Install dependencies*:
    bash
    npm install
    
3. *Set up environment variables*:
    Create a .env file in the backend directory and add the following:
    env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    
4. *Start the server*:
    bash
    npm start
    
### Frontend (Next.js)
1. *Navigate to the client directory*:
    bash
    cd ../client
    
2. *Install dependencies*:
    bash
    npm install
    
3. *Set up environment variables*:
    Create a .env.local file in the client directory and add any required environment variables, such as API endpoints.
4. *Run the development server*:
    bash
    npm run dev
    
## Running the Servers
To run both servers simultaneously, follow the steps below:
1. *Start the backend server*:
    bash
    cd backend
    npm start
    
2. *Start the frontend server*:
    Open a new terminal window/tab, then:
    bash
    cd client
    npm run dev

UI/UX Design https://www.figma.com/design/oBTyc9CmtrVPF5NzTDyVI1/Untitled?node-id=0%3A1&t=7BQikXu6t2lmjB9F-1

The backend server will be running on http://localhost:5000 and the frontend server on http://localhost:3000.

## Contributing
We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details on how to get started.
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
