angular
    .module('cdsApp')
    .controller('GlobalController', GlobalController)
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
    .controller('TopController', TopController);

/** Example of angular.extend() */
function TopController(DataService) {

    var vm = {
        DataService: DataService,
        motto: 'Yes we can!'
    };

    angular.extend(this, vm);
};

function MiddleController(DataService) {
    var vm = this;
    vm.DataService = DataService;
};

function BottomController(DataService, DataFactory) {
    var vm = this;
    vm.DataService = DataService;
    vm.DataFactory = DataFactory;
};

function GlobalController(DataService, DataFactory) {
    var vm = this;
    vm.DataService = DataService;
    vm.DataFactory = DataFactory;
    DataFactory.getDataStream();
    vm.result = DataFactory.items;
};