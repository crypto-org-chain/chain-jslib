/**
 * Get library version from package name
 */
module.exports = {
    getVersion: (name) => {
        const parts = name.split(' ');
        return parts[parts.length - 1];
    },
};
