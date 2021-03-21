module.exports = {
  theme: {
    extend: {
      screens: {
        xs: '480px' // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
    }
  },
  plugins: [require('windicss/plugin/typography')]
}
