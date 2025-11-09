// /workspaces/Anythink-Market-outbwhce/chain_prompting.js

function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('toCamelCase expects a non-empty string');
    }
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        throw new TypeError('toCamelCase expects a non-empty string');
    }

    // Split on spaces or hyphens, ignore empty segments
    const words = trimmed.split(/[\s-]+/).filter(Boolean);

    // Capitalize first letter of each word, lowercase the rest, then concatenate
    return words
        .map(w => {
            const lower = w.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;