angular.module('delta').controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope) {
    $scope.nome = 'Wendel';
    $scope.testeFuncao = testeFuncao;

    function testeFuncao() {
        alert('Olá ' + $scope.nome);
    }
}