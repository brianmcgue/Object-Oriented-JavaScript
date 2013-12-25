(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var readline = require('readline');
  var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var Game = Hanoi.Game = function () {
    this.piles = [
      [1,2,3],
      [],
      []
    ];
  };

  Game.prototype.play = function () {
    var that = this;
    function playTurn (again) {
      if (again) {
        that.performMove(true, playTurn);
      } else {
        console.log("Current Piles: " + that.piles[0] + "|" + that.piles[1] + "|" + that.piles[2]);
        console.log("You win!");
      }
    }

    playTurn(true);
  };

  Game.prototype.performMove = function (again, callback) {
    var that = this;
    console.log("Current Piles: " + this.piles[0] + "|" + this.piles[1] + "|" + this.piles[2]);
    that.askQuestion(function (fromPile, toPile) {
      if(that.piles[fromPile].length > 0 && (that.piles[toPile].length === 0 ||
         that.piles[toPile][0] > that.piles[fromPile][0])){

            that.piles[toPile].unshift(that.piles[fromPile].shift());
      }

      if (that.piles[0].length === 0 && that.piles[1].length === 0) {
        again = false;
      }

    callback(again);
    });
  };

  Game.prototype.askQuestion = function (callback) {
    var question1 = "From which pile would you like to move a disk? ";
    reader.question(question1, function (fromPile) {
      var question2 = "To which pile would you like to move this disk? ";
      reader.question(question2, function (toPile) {
        callback(fromPile, toPile);
      });
    });
  };
})(this);

game = new this.Hanoi.Game();
game.play();