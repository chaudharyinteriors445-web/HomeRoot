// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
export default {
  plugins: {
    tailwindcss: { config: "./tailwind.config.ts" },
    autoprefixer: {},
  },
  from: undefined, // Prevent PostCSS from complaining
};
