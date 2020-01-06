var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //app.get("/api/latest",function(req,res){
    // return res.json(friend[friends.length - 1]);
    //});

    app.post("/api/friends", function (req, res) {
        var survey = req.body;
        var scoresArray = [];

        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;

            for (var j = 0; j < URLSearchParams.scores.length; j++) {
                scoreDifference += (Math.abs(friends[i].scores[j] - URLSearchParams.scores[j]));
            }

            scoresArray.push(scoreDifference);

        }
        for (var i = 0; i < scoresArray.length; i++) {
            var bestMatch = 0

            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        var bestFriendMatch = friends[bestMatch];
        res.json(bestFriendMatch);

        friends.push(user);

    });
}