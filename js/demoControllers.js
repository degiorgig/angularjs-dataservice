angular
    .module('cdsApp')
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
    .controller('NestedController', NestedController)
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

function NestedController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}