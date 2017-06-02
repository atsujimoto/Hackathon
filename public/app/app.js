// Enter name of App and name of Ctrls!!!!!!
var app = angular.module('MyApp', ['ui.router', 'MainCtrls']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/404');
        $httpProvider.interceptors.push('AuthInterceptor');

        $stateProvider

        // -----------------HOME PAGE-------------------------
            .state('home', {
                url: '/',
                templateUrl: 'app/views/dashboard.html'
            })
            // ------------USER Login/Signup-------------------------------
            // ADD CONTROLLER
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/views/userSignup.html',
                controller: ''
            })
            // ADD CONTROLLER
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/userLoginRegister.html',
                controller: ''
            })
            // ------------PROFILE-------------------------------
            // Show Profile Page ADD CONTROLLER
            .state('showProfile', {
                url: '/showProfile',
                templateUrl: 'app/views/showProfile.html',
                controller: ''
            })
            // Edit Profile Page ADD CONTROLLER
            .state('editProfile', {
                url: '/editProfile',
                templateUrl: 'app/views/editProfile.html',
                controller: ''
            })
            // ------------USERS-------------------------------
            //Show Many Users Page
            .state('showUsers', {
                url: '/showUsers',
                templateUrl: 'app/views/showUsers.html',
                controller: ''
            })
            // ------------PROJECTS-------------------------------
            // Show A Project Page ADD CONTROLLER
            .state('showProject', {
                url: '/showProfile',
                templateUrl: 'app/views/showProfile.html',
                controller: ''
            })
            // Edit A Project Page ADD CONTROLLER
            .state('editProject', {
                url: '/editProject',
                templateUrl: 'app/views/editProject.html',
                controller: ''
            })
            // Show Many Projects Page ADD CONTROLLER
            .state('showProjects', {
                url: '/showProjects',
                templateUrl: 'app/views/showProjects.html',
                controller: ''
            })
            // ------------ERROR-------------------------------
            // 404 Page
            .state('404', {
                url: '/404',
                templateUrl: 'app/views/404.html'
            });

        $locationProvider.html5Mode(true);
    }
]);
