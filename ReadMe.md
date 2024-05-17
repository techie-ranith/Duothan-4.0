# AI-Driven Talent Acquisition Platform

Welcome to the AI-Driven Talent Acquisition Platform repository! This platform is designed to revolutionize the recruitment process for businesses by leveraging advanced AI technologies. Below you'll find instructions for setting up and running the client and server sides of the application.

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Yarn
- MongoDB (v4.x or higher)

## Setup Instructions

### Client Side (Next.js)
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/ai-talent-acquisition-platform.git
    cd ai-talent-acquisition-platform/client
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

3. **Set up environment variables**:
    Create a `.env.local` file in the client directory and add any required environment variables, such as API endpoints.

4. **Run the development server**:
    ```bash
    yarn dev
    ```

### Server Side (Express.js)
1. **Navigate to the server directory**:
    ```bash
    cd ../server
    ```

2. **Install dependencies**:
    ```bash
    yarn install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the server directory and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. **Start the server**:
    ```bash
    yarn start
    ```

The client-side application will be running on http://localhost:3000, and the server-side application will be running on http://localhost:5000.

## Contributing
We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details on how to get started.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
