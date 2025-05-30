// Generate path
// Example: "Hello :friendName I'm :myName" with object {friendName: "Alice", myName: "Bob"} to "Hello Alice I'm Bob"
export function generatePath<T>(
    str: string,
    obj: T & { [K in keyof T]: string | number },
) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key]?.toString();
            const colonPattern = new RegExp(`:${key}\\b`, 'g'); // Example: ":id"
            const bracePattern = new RegExp(`{${key}}`, 'g'); // Example: "{id}"
            str = str.replace(colonPattern, value).replace(bracePattern, value);
        }
    }
    return str;
}
