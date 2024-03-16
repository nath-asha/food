// fileParser.js

// Utility function to parse uploaded text files
exports.parseTextFile = async (file) => {
    try {
      // Process the uploaded file here
      // Example: Parse the text file content and return the data
      const data = parseText(file);
      return data;
    } catch (error) {
      throw error;
    }
  };
  