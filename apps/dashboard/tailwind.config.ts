const tailwindConfig = require("@dcrgll/tailwind-config/tailwind.config.js")

module.exports = {
  presets: [tailwindConfig],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ]
}
