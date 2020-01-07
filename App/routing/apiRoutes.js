var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //console.log("this post route was hit")
        var survey = req.body;
        var scoresArray = [];
        console.log(survey);

        for (var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
            for (var j = 0; j < survey.scores.length; j++) {
                scoreDifference += (Math.abs(friends[i].scores[j] - survey.scores[j]));
            }

            scoresArray.push(scoreDifference);

        }
        for (var i = 0; i < scoresArray.length; i++) {
            var bestMatch = 0

            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        friends.push(survey);
        var bestFriendMatch = friends[bestMatch];
        res.json(bestFriendMatch);


    });
}