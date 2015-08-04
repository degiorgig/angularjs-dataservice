
angular.module('DataService', []).factory('DataService', function(){
    var service = {};
    service.topValue = 1;
    service.middleValue = 2;
    //service.bottomValue = 3; /** If not found it will be created runtime */

    return service;
});

angular.module('demo', ['DataService']);