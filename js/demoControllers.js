angular
    .module('cdsApp')
<<<<<<< HEAD
    .controller('GlobalController', GlobalController)
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
=======
    .controller('MiddleController', MiddleController)
    .controller('BottomController', BottomController)
    .controller('NestedController', NestedController)
>>>>>>> origin/master
    .controller('TopController', TopController);

/** Example of angular.extend() */
function TopController(DataService) {

    var vm = {
        DataService: DataService,
        motto: 'Yes we can!'
    };

    angular.extend(this, vm);
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/master

function MiddleController(DataService) {
    var vm = this;
    vm.DataService = DataService;
<<<<<<< HEAD
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
=======
}

function BottomController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}

function NestedController(DataService) {
    var vm = this;
    vm.DataService = DataService;
}
>>>>>>> origin/master
