angular
    .module('cdsApp')
    .controller('NestedController', NestedController);

function NestedController($log, DataService) {
    var vm = this;
    vm.DataService = DataService;

    vm.changeTopValue = changeTopValue;

    function changeTopValue() {
        //set parameters in the service
        $log.info("changeTopValue called");
        vm.DataService.topValue = "test";
    }
}