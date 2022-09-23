module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'primary': '#1E90FF',
            },
            fontFamily: {
                opensans: ['"Open Sans"', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
                activeColor: '#862DEB',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
    },
    variants: {
        fill: ['hover', 'focus'],
        stroke: ['hover', 'focus'],
        extend: {},
    },
    plugins: [],
};
