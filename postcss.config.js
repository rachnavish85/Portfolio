export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
    build: {
    rollupOptions: {
      external: ['react-hook-form']
    }
  }

}
