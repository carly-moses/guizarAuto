angular.module("app")
.config(($routeProvider) => {
  $routeProvider
  .when("/home", {
    template: `<home></home>`
  })
  .when("/dealer", {
    template: `<dealer></dealer>`
  })
  .when("/consumer", {
    template: `<consumer></consumer>`
  })
  .when("/finance", {
    template: `<finance></finance>`
  })
  .when("/contact", {
    template: `<contact></contact>`
  })
  .otherwise ({
    redirectTo: "/home"
  })
});