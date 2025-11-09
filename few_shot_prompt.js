function toCamelCase(str) {
    return str
        .split(/[\s-_]+/) // Split by spaces, hyphens, or underscores
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter of subsequent words
        })
        .join(''); // Join all words together
}

// Example usage:
console.log(toCamelCase('first name')); // firstName
console.log(toCamelCase('user_id')); // userId
console.log(toCamelCase('SCREEN_NAME')); // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber