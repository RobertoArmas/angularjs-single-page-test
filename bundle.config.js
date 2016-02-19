// bundle.config.js
module.exports = {
  bundle: {
    main: {
      scripts: [
        './js/app.js',
        './js/controllers.js',
        './js/routes.js',
        './templates/hello/js/controllers.js',
        './templates/roberto/js/controllers.js'
      ],
      styles: './css/**/*.css'
    },
    vendor: {
      scripts: [
        './libs/bootstrap/dist/js/bootstrap.min.js',
        './libs/angular-ui-router/release/angular-ui-router.min.js'
      ],
      styles: [
        './libs/bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  }
  //,
  //copy: './content/**/*.{png,svg}'
};