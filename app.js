var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/gpa", {
            templateUrl: "partials/gpa.html",
            controller: "GpaCntrl"
        })
        .when("/cgpa", {
            templateUrl: "partials/cgpa.html"
        })
        .otherwise({
            redirectTo: "/gpa"
        });

});

myApp.controller("HeaderCntrl", function ($scope) {
    $scope.appDetails = {};
    $scope.appDetails.title = "GPA Calculator";
    $scope.appDetails.tagline = "KEEP IT UP!";

});
var m = 'hello'

myApp.controller("GpaCntrl", function ($scope) {
    $scope.names = [{grade: "Select", point: 0.00}, {grade: "A", point: 4.00}, {grade: "A-", point: 3.67}, {
        grade: "B+",
        point: 3.33
    }, {grade: "B", point: 3.00}, {grade: "B-", point: 2.67}, {grade: "C+", point: 2.33}, {
        grade: "C",
        point: "2.00"
    }, {grade: "C-", point: 1.67}, {grade: "D+", point: 1.33}, {grade: "D", point: 1.00}, {
        grade: "D-",
        point: 0.67
    }, {grade: "F", point: 0.00}];
    $scope.gpa = {};
    $scope.gpa.value = "Enter courses taken";
    $scope.items = [];

    $scope.upateEntries = function () {
        $scope.items = [];

        for (var i = 0; i < $scope.entries; i++) {
            $scope.items.push(i);
        }
    };
    $scope.saveAllValues = function () {
        var grades = $scope.items.map(Number);
        var sum = 0, count = 0, avg = 0;
        $scope.avg1 = 0;

        for (var i = 0; i < grades.length; i++) {
            sum = sum + grades[i];
            count++;
        }

        avg = sum / count;
        $scope.avg1 = avg.toFixed(2);
        $scope.result = 0;

        if ($scope.avg1 > $scope.names[2].point && $scope.avg1 <= $scope.names[1].point) {
                console.log($scope.names[1].grade);
                $scope.result = $scope.names[1].grade;
        }
        else if ($scope.avg1 > $scope.names[3].point && $scope.avg1 <= $scope.names[2].point) {
            console.log($scope.names[2].grade);
            $scope.result = $scope.names[2].grade;
        }
        else if ($scope.avg1 > $scope.names[4].point && $scope.avg1 <= $scope.names[3].point) {
            console.log($scope.names[3].grade);
            $scope.result = $scope.names[3].grade;
        }
        else if ($scope.avg1 > $scope.names[5].point && $scope.avg1 <= $scope.names[4].point) {
            console.log($scope.names[4].grade);
            $scope.result = $scope.names[4].grade;
        }
        else if ($scope.avg1 > $scope.names[6].point && $scope.avg1 <= $scope.names[5].point) {
            console.log($scope.names[5].grade);
            $scope.result = $scope.names[5].grade;
        }
        else if ($scope.avg1 > $scope.names[7].point && $scope.avg1 <= $scope.names[6].point) {
            console.log($scope.names[6].grade);
            $scope.result = $scope.names[6].grade;
        }
        else if ($scope.avg1 > $scope.names[8].point && $scope.avg1 <= $scope.names[7].point) {
            console.log($scope.names[7].grade);
            $scope.result = $scope.names[7].grade;
        }
        else if ($scope.avg1 > $scope.names[9].point && $scope.avg1 <= $scope.names[8].point) {
            console.log($scope.names[8].grade);
            $scope.result = $scope.names[8].grade;
        }
        else if ($scope.avg1 > $scope.names[10].point && $scope.avg1 <= $scope.names[9].point) {
            console.log($scope.names[9].grade);
            $scope.result = $scope.names[9].grade;
        }
        else if ($scope.avg1 > $scope.names[11].point && $scope.avg1 <= $scope.names[10].point) {
            console.log($scope.names[10].grade);
            $scope.result = $scope.names[10].grade;
        }
        else if ($scope.avg1 > $scope.names[12].point && $scope.avg1 <= $scope.names[11].point) {
            console.log($scope.names[11].grade);
            $scope.result = $scope.names[11].grade;
        }
        else{
            console.log("fail");
            $scope.result = "FAIL"
        }

}

})
;


