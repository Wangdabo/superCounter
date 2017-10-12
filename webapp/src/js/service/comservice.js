myApp.factory('common_service',['$http', '$q', function ($http,$q) {
    var service={};
    service.post = function (url, subFrom) {
        var res = $http.post(url,subFrom).then(function (response) {
            return response.data;
        });
        return res;
    };
    return service;
}]);
