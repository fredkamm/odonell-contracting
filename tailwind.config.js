module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      fontFamily: {
        primary: 'Playfair Display',
        body: 'Work Sans',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        colors: {
          primary: '#33DB18',
          secondary: '#1C1D24',
          tertiary: '#131419',
          buttons: '#00A651',
          accent: {
            DEFAULT: '#42d664',
            hover: '#00A651',
          },
          paragraph: '#949fb0',
        },
      },
    },
    plugins: [],
  };
  