angular.module('MainCtrls', ['MainServices'])
    .controller('NavCtrl', ['$scope', 'Auth', 'Alerts', function($scope, Auth, Alerts) {
        $scope.Auth = Auth;
        $scope.logout = function() {
            Auth.removeToken();
            Alerts.clear();
            Alerts.add('Success', 'Logout successful');
            console.log('My token:', Auth.getToken());
        };
    }])
    .controller('SignupCtrl', ['$scope', '$http', '$location', 'Alerts', function($scope, $http, $location, Alerts) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.userSignup = function() {
            $http.post('/api/users', $scope.user).then(function success(data) {
                $location.path('/');
                Alerts.clear();
                Alerts.add('Success', 'Signup successful');
            }, function error(data) {
                Alerts.clear();
                Alerts.add('Success', 'Signup failed');
                console.log(data);
            });
        };
    }])
    .controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', 'Alerts', function($scope, $http, $location, Auth, Alerts) {
        $scope.user = {
            email: '',
            password: ''
        };
        $scope.userLogin = function() {
            $http.post('/api/auth', $scope.user).then(function success(data) {
                Auth.saveToken(data.data.token);
                Alerts.clear();
                Alerts.add('Success', 'Login successful');
                console.log('Token is:', data.data.token);
                $location.path('/');
            }, function error(data) {
                Alerts.clear();
                Alerts.add('Success', 'Login failed');
                console.log(data);
            });
        };
    }])
    .controller('AlertCtrl', ['$scope', 'Alerts', function($scope, Alerts) {
        $scope.Alerts = Alerts;
    }])
    .controller('DashCtrl', ['$scope', function($scope) {
        $scope.toggle = function(bool) {
            $scope.bool = bool;
        }
    }]);
