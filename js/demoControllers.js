angular
    .module('demo')
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
    .controller('TopController', TopController);

function TopController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}

function MiddleController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}

function BottomController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}