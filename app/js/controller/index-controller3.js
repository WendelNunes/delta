angular.module('delta').controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter'];

function IndexController3($scope, $timeout, AlertService, $filter) {
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.ultimaDataSalva = '';
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar() {
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs: [
                {field: 'nome', displayName: 'Nome', width: 200},
                {field: 'sobrenome', displayName: 'Sobrenome'},
                {
                    field: 'nascimento',
                    displayName: 'Data nascimento',
                    width: 170,
                    cellTemplate: 'app/template/cell-template-date.html'
                },
                {
                    field: 'editar',
                    displayName: '',
                    width: 50,
                    cellTemplate: 'app/template/cell-template-editar.html'
                },
            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

    function salvar() {
        if ($scope.formPessoa.$invalid) {
            AlertService.showError('Informe os campos obrigatórios');
            setarTouchedNosInputs();
            return;
        }
        var data = $scope.entidade.nascimento;
        $scope.ultimaDataSalva = $filter('date')(data, 'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess('Salvo com sucesso');
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $timeout(function () {
            setarUntouchedNosInputs();
        }, 80);
    }

    function setarTouchedNosInputs() {
        angular.forEach($scope.formPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setTouched();
            });
        });
    }

    function setarUntouchedNosInputs() {
        angular.forEach($scope.formPessoa.$error, function (error) {
            angular.forEach(error, function (field) {
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(entidadeSelecionada) {
        this.entidade = entidadeSelecionada;
    }

    function getRowStyle(entidadeSelecionada) {
        var style = {};
        style.backgroundColor = entidadeSelecionada.cor;
        style.color = 'white';
        return style;
    }
}