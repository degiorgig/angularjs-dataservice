
angular.module('DataService', []).factory('DataService', function(){
    var service = {};
    service.topValue = "1 (default)";
    service.middleValue = "2 (default)";
    service.bottomValue;
    /** If not found it will be created runtime */

    return service;
});

angular.module('cdsApp', ['DataService']);