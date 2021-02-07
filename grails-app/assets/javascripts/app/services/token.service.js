'use strict'

angular.module('myApp')
    .factory('tokenService',['$rootScope', '$http', '$q', function($rootScope, $http, $q) {

        var baseUrl = 'https://integrate.elluciancloud.com/auth';
        var key = 'Bearer 7e62f372-d49d-423d-8a78-2ff747271d8c';

        var setToken = function(){
            var deferred = $q.defer();
            
            var reqSetup = {
                method: 'POST',
                url: baseUrl,
                headers: {
                    'Authorization': key
                }
            }

            $http(reqSetup)
                .then(function(response) {
                    deferred.resolve(response.data);
                    sessionStorage.sessionId = angular.toJson(response.data);
                });

            return deferred.promise;
        }

        var getToken = function(){
            return angular.fromJson(sessionStorage.sessionId);
        }

        return {
            setToken : setToken,
            getToken : getToken
        }
    } ]);