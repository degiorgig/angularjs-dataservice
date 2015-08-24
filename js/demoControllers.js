angular
    .module('cdsApp')
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
    .controller('NestedController', NestedController)
    .controller('TopController', TopController);

/** Example of angular.extend() */
function TopController(DataService) {

    var vm = {
        DataService: DataService,
        motto: 'Yes we can!'
    };

    angular.extend(this, vm);
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