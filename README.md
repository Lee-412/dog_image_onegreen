# React + TypeScript + Vite

This project is a minimal setup for React with TypeScript using Vite. It includes HMR (Hot Module Replacement) and ESLint rules for better development experience.

## Features
- React + TypeScript + Vite
- Mantine UI
- API integration for fetching random dog images
- ESLint with recommended TypeScript and React-specific rules

## API Used
This project fetches random dog images using the [Dog CEO API](https://dog.ceo/dog-api/documentation/).

### Example API Call
```ts
  const response = await fetch(`https://dog.ceo/api/breeds/image/random/${count}`);
            const data = await response.json();
            return data.message as string[];
```

## Installation and Setup
Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository
```sh
git clone [https://github.com/your-username/your-repo.git](https://github.com/Lee-412/dog_image_onegreen.git)
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Project
```sh
npm run dev
```
This will start a local development server. Open your browser and navigate to `http://localhost:5173` to see the project in action.

### Check DSA
## Task 1: Algorithm - Array Processing

```sh
  cd image_random
  node missingNumber.js
```
  
## Task 2: Algorithm - String Processing
```sh
  cd image_random
  node isValidPassword.js
```
## License
This project is open-source and available under the MIT License.
