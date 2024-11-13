/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(100px)' },
          '50%': { transform: 'translate(0px)' },
        },
         wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          
          '100%': { transform: 'rotate(360deg)' },
        },
        
        
      }
    },
    
  },
  plugins: [],
};
