angular.module('myApp')
    .factory('ethosApiService',['$http', '$q', 'tokenService', function($http, $q, tokenService) {
        
        var baseUrl = 'https://integrate.elluciancloud.com/api/persons';
        var studentId = '725d8dad-fd90-4e5f-aff1-a5e7c62ab9f0';
        
        var getPersonById = function(){
            var reqSetup = {
                method: 'GET',
                url: baseUrl + '/' + studentId,
                headers: {
                    'Authorization': 'Bearer '+tokenService.getToken()
                }
            }

            var deferred = $q.defer();
            $http(reqSetup)
                .then(function(response) {
                    deferred.resolve(response.data);
                    console.log(response.data);
                });

            return deferred.promise;

        }

        return {
            getPersonById : getPersonById
        }

    }]);