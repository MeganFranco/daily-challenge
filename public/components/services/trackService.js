var app = angular.module("RejectionApp");

app.service("TrackerService", ["$http", "UserService", function ($http, UserService) {
    var self = this;
//    var baseUrl = "http://localhost:5000/api/";


    // Gets all the failure objects for a given user. Get by username
//        return $http.get(baseUrl + 'failure')
        return $http.get('/api/failure')
            .then(function (response) {
//            console.log('response ',response.data);
                return response.data;
                    //                self.failures = response.data;
            })
    };

    ////Adds failures to DB/////
    this.addFail = function (fail) {
        //        fail.user = UserService.currentUser._id
        return $http.post('/api/failure', fail)
            .then(function (response) {
                return response.data;
            })
    };

    ////Deletes failures from DB//// 
    this.deleteFail = function (failId) {
        return $http.delete('/api/failure' + failId)
    }

}]);