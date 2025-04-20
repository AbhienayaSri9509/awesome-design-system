/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6366F1", // Indigo 500
          secondary: "#64748B", // Slate 500
          background: "#F9FAFB",
        },
      },
    },
    darkMode:'class',
    plugins: [],
  }
  