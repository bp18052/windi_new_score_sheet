import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('@windicss/animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
    }),
  ],
});
