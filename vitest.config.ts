import path from "node:path"

export default {
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@controllers": path.resolve(__dirname, "src/controllers"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
    },

  }
}
