module.exports = {
  testEnvironment: 'jsdom', // Required for React Testing Library
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extends Jest with custom matchers
  moduleFileExtensions: ['js', 'jsx'], // Support .js and .jsx files
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform .js and .jsx files with babel-jest
  },
};