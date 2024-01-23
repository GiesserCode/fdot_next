/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    // Other configurations...

    // Add this line for static HTML export
    exportPathMap: function () {
        return {
            '/': { page: '/' },
            // Add other pages as needed
        };
    },
};

