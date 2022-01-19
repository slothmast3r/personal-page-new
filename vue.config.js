module.exports = {
    publicPath: '/personal-page-new/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
      @import "@/assets/styles/_variables.scss";
      @import "@/assets/styles/_mixins.scss";
      `,
            },
        },
    },
}