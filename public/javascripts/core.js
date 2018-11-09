var bogoTodo = angular.module('bogoTodo', []);

function mainController($scope, $http) {
$scope.formData = {};

$http.get('/api')
.success(function(data) {
$scope.a = data;
console.log(data);
})
.error(function(data) {
console.log('Error: ' + data);
});

$scope.createTodo = function() {
$http.post('/api', $scope.formData)
.success(function(data) {
$scope.formData = {}; 
$scope.a = data;
console.log(data);
})
.error(function(data) {
console.log('Error: ' + data);
});
};

$scope.deleteTodo = function(id) {
$http.delete('/api' + id)
.success(function(data) {
$scope.a = data;
console.log(data);
})
.error(function(data) {
console.log('Error: ' + data);
});
};

}