function convertCamelCase(s) {
    return s
        .split(/[\s_]+/) // Split by spaces or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word to lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join all words without spaces
}

// Example usage:
console.log(convertCamelCase("CustomFunction")); // Output: customFunction
console.log(convertCamelCase("test function")); // Output: testFunction