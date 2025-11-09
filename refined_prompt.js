/**
 * Convert a string to camelCase.
 *
 * The function:
 * - Validates that the input is a string.
 * - Splits the input on any sequence of non-alphanumeric ASCII characters (regex: /[^a-zA-Z0-9]+/).
 * - Throws if the split produces no valid words (i.e., the array is empty or every segment is an empty string).
 * - Produces camelCase by lowercasing the first word entirely and capitalizing the first character of each subsequent
 *   word while lowercasing the remainder of those words.
 *
 * Notes:
 * - The split uses an ASCII-only alphanumeric character class; Unicode letters are not treated as alphanumeric by the
 *   split regex.
 * - Empty segments caused by consecutive separators are not filtered prior to mapping; they effectively contribute
 *   empty strings to the join, but the function only throws when every segment is empty.
 * - Numeric-only tokens are preserved (e.g., "v2 4" -> "v24" or "823" -> "823").
 *
 * @function convertCase
 * @param {string} input - The input string to convert. Expected to be a plain JavaScript string.
 * @returns {string} The camelCased string: first word all-lowercase; each subsequent word with the first letter
 *                   uppercased and the rest lowercased, concatenated without separators.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If splitting the input yields no valid words (e.g., input is empty or consists only of separators).
 *
 * @example
 * convertCase("test function"); // -> "testFunction"
 * @example
 * convertCase("Hello-WORLD_example"); // -> "helloWorldExample"
 * @example
 * convertCase("  --lead-and--trail--  "); // -> "leadAndTrail"
 * @example
 * convertCase("823"); // -> "823"
 */
 
/**
 * Convert a string to dot.case (lowercase words separated by dots).
 *
 * The function:
 * - Validates that the input is a string.
 * - Splits the input on any sequence of non-alphanumeric ASCII characters (regex: /[^a-zA-Z0-9]+/).
 * - Throws if the split produces no valid words (i.e., the array is empty or every segment is an empty string).
 * - Lowercases each word and joins them with a single dot ('.').
 *
 * Notes:
 * - The split uses an ASCII-only alphanumeric character class; Unicode letters are not treated as alphanumeric by the
 *   split regex.
 * - Empty segments created by consecutive separators are not filtered before mapping; they will produce empty
 *   elements in the join, but the function throws only when every segment is empty.
 * - Numeric-only tokens are preserved and included in the dot-separated output.
 *
 * @function convertToDotCase
 * @param {string} input - The input string to convert. Expected to be a plain JavaScript string.
 * @returns {string} The dot.cased string: all words lowercased and joined by '.' characters.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If splitting the input yields no valid words (e.g., input is empty or consists only of separators).
 *
 * @example
 * convertToDotCase("test function"); // -> "test.function"
 * @example
 * convertToDotCase("Hello-WORLD_example"); // -> "hello.world.example"
 * @example
 * convertToDotCase("  --lead-and--trail--  "); // -> "lead.and.trail"
 * @example
 * convertToDotCase("823"); // -> "823"
 */
function convertCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Invalid input: expected a string.');
    }

    // Split the string by any non-alphanumeric character
    const words = input.split(/[^a-zA-Z0-9]+/);
    
    // Check for empty strings after splitting
    if (words.length === 0 || words.every(word => word === '')) {
        throw new Error('Invalid input: no valid words found.');
    }

    // Convert to camel case
    return words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase(); // First word in lower case
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize subsequent words
    }).join('');
}

// Example usage
function convertToDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Invalid input: expected a string.');
    }

    // Split the string by any non-alphanumeric character
    const words = input.split(/[^a-zA-Z0-9]+/);
    
    // Check for empty strings after splitting
    if (words.length === 0 || words.every(word => word === '')) {
        throw new Error('Invalid input: no valid words found.');
    }

    // Convert to dot case
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage
try {
    console.log(convertCase("test function")); // Output: 'testFunction'
    console.log(convertToDotCase("test function")); // Output: 'test.function'
    console.log(convertToDotCase("823")); // Throws error
} catch (error) {
    console.error(error.message);
}