'use strict';

angular.module('myApp.view2', ['ngRoute','ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', function ($scope) {
    $scope.f=function(a){
      if(a==0){
        $scope.x="";
        return ;
      }
      $scope.x=a;
    }
    $scope.items = [
      {
        "id": 1,
        "type": "blocked"
      },
      {
        "id": 2,
        "type": "blank"
      },
      {
        "id": 3,
        "type": "bounce"
      }
    ];

    $scope.data = [
      {
        "id":1,
        "sendGridEmailLogID": 1131,
        "created": 1597091355,
        "email": "test1@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "A",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id": 3,
        "sendGridEmailLogID": 1132,
        "created": 1597091356,
        "email": "test2@test.com",
        "event": "bounce",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "bounce",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "B",
        "clientName": null,
        "ein": null,
        "status": "bounce",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id": 3,
        "sendGridEmailLogID": 1133,
        "created": 1597091357,
        "email": "test3@test.com",
        "event": "bounce",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "bounce",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "C",
        "clientName": null,
        "ein": null,
        "status": "bounce",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":1,
        "sendGridEmailLogID": 1134,
        "created": 1597091358,
        "email": "test4@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "D",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id": 3,
        "sendGridEmailLogID": 1135,
        "created": 1597091359,
        "email": "test5@test.com",
        "event": "bounce",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "bounce",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "E",
        "clientName": null,
        "ein": null,
        "status": "bounce",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":1,
        "sendGridEmailLogID": 1136,
        "created": 1597091360,
        "email": "test6@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "F",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":1,
        "sendGridEmailLogID": 1137,
        "created": 1597091375,
        "email": "test7@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "G",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":1,
        "sendGridEmailLogID": 1138,
        "created": 1597091375,
        "email": "test8@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "H",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id": 3,
        "sendGridEmailLogID": 1139,
        "created": 1597091389,
        "email": "test9@test.com",
        "event": "bounce",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "bounce",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "I",
        "clientName": null,
        "ein": null,
        "status": "bounce",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":2,
        "sendGridEmailLogID": 1140,
        "created": 1597091389,
        "email": "testx@test.com",
        "event": "blank",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blank",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "F",
        "clientName": null,
        "ein": null,
        "status": "blank",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id": 3,
        "sendGridEmailLogID": 1141,
        "created": 1597091390,
        "email": "test10@test.com",
        "event": "bounce",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "bounce",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "J",
        "clientName": null,
        "ein": null,
        "status": "bounce",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      },
      {
        "id":1,
        "sendGridEmailLogID": 1151,
        "created": 1597091391,
        "email": "test11@test.com",
        "event": "blocked",
        "ip": null,
        "reason": "550 5.1.1",
        "subject": "Chart You",
        "type": "blocked",
        "sendGridUTC": "2020-08-10T20:29:15",
        "sendGridPST": "2020-08-10T13:29:15",
        "sendGridUTCDisplay": "Monday, August 10, 2020 8:29:15 PM",
        "sendGridPSTDisplay": "Monday, August 10, 2020 1:29:15 PM",
        "employeeName": "K",
        "clientName": null,
        "ein": null,
        "status": "blocked",
        "dateSent": "2020-08-10T20:29:13.56",
        "emailSent": "Chart Your Course"
      }
    ];

    $scope.sort = function (keyname) {
      $scope.sortKey = keyname;
      $scope.reverse = !$scope.reverse;
    };
  });