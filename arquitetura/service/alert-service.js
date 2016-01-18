angular.module('delta').service('AlertService', AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr) {
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showInfo = showInfo;
    this.showWarning = showWarning;
    var configuracao = {};
    configuracao.progressBar = true;

    function showSuccess(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Ok';
        }
        toastr.success(mensagem, titulo, configuracao);
    }

    function showError(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Erro';
        }
        toastr.error(mensagem, titulo, configuracao);
    }

    function showInfo(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Inf.';
        }
        toastr.info(mensagem, titulo, configuracao);
    }

    function showWarning(mensagem, titulo) {
        if (!titulo) {
            titulo = 'Atenção';
        }
        toastr.warning(mensagem, titulo, configuracao);
    }
}