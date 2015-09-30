<<<<<<< HEAD
angular.module('cdsApp', ['DataService']);
angular.module('DataService', [])

    .service('DataService', function () {
        var service = {};
        service.topValue = "1 (default)";
        service.middleValue = "2 (default)";
        service.bottomValue;
        /** If not found it will be created runtime */

        service.currentUser = currentUser();
        function currentUser() {
            // console.log("current enter ");
            if (typeof current === "undefined") {
                //   console.log("enters setup");
                current = "user";
            }
            return current;
        };
        return service;
    })

    .factory('DataFactory', function ($q, $timeout, $log) {
        var svc = {};
        svc.items = [];

        svc.getDataStream = function () {
            function asyncData() {
                var fakeData = [
                    {id: 1, name: 'name 1'},
                    {id: 2, name: 'name 2'},
                    {id: 4, name: 'name 4'}
                ];
                // perform some asynchronous operation, resolve or reject the promise when appropriate.
                return $q(function(resolve) {
                    setTimeout(function() {
                        resolve(fakeData);
                    }, 2000);
                });
            }

            return asyncData().then(function(data) {
                //everything went well
                svc.items = data;
            }, function(reason) {
                $log.warn('Failed: ' + reason);
            });
        };

        return svc;
    });
=======

angular.module('DataService', []).factory('DataService', function(){
    var service = {};
    service.topValue = "1 (default)";
    service.middleValue = "2 (default)";
    service.bottomValue;
    /** If not found it will be created runtime */

    service.currentUser = currentUser();

    function currentUser(){
        if( typeof current === "undefined"){
            current = "current_value";
        }
        return current;
    };

    return service;
});

angular.module('cdsApp', ['DataService']);
>>>>>>> origin/master
