"use strict";

eventsApp.controller("EventController",
  function EventController($scope){
    $scope.event = {
      name: "Trying Out Angular",
      date: "23/02/2016",
      time: "10:30am",
      location: {
        address: "55 Moleye Street",
        city: "Sabo",
        state: "Lagos"
      },
      imageUrl: "/img/angularjs-logo.png",
      sessions: [
                  {
                    name: "Directives Masterclass",
                    creatorName: "Olaide Ojewale",
                    level: "Advanced",
                    duration: "1 hour",
                    upvoteCount: 0
                   },
                  {
                    name: "Scope for fun and profit",
                    creatorName: "Olaide Ojewale",
                    level: "Advanced",
                    duration: "1 hour",
                    upvoteCount: 0
                  },
                  {
                    name: "Well behaved controllers",
                    creatorName: "Olaide Ojewale",
                    level: "Advanced",
                    duration: "1 hour",
                    upvoteCount: 0
                  }
      ]
    }
    $scope.upVoteSession = function(session) {
      session.upvoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upvoteCount--;
    };
});
