(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
  };

  View.prototype.setUpBoard = function() {
    for (var row = 0; row < 3; row++) {
      var $row = $("<div class='row'></div>");
      for (var col = 0; col < 3; col++) {
        var $tile = $("<div class='tile'></div>");
        $tile.attr("data-row-id", row);
        $tile.attr("data-col-id", col);
        $row.append($tile);
      }
      this.$el.append($row);
    }
  };

  View.prototype.startGame = function() {
    var that = this;

    $(".tile").on("click", function(event) {
      if (that.game.currentPlayer === "X") {
        var $clicked = $(event.currentTarget);
        that.markTile($clicked);
      }
      if (that.game.board.over()) {
        $("body").append("<div class='modal'></div>");
        if (that.game.board.won()) {
          $("body").append("<div class='over'>Computer Won!<br><button class='over'>Play Again</button></div>");
          console.log("looks like the computer won! :) ");
        } else {
          $("body").append("<div class='over'>It's a draw!<br><button class='over'>Play Again</button></div>");
        }
        $("div.over").animate({left: '50%'}, "slow");
        $("button.over").on("click", function() {
          location.reload();
        });
      }
    });

    if (this.game.currentPlayer === "Y") {
      this.game.playComputerMove();
    }
  };

  View.prototype.markTile = function($clicked) {
    var row = $clicked.data("rowId");
    var col = $clicked.data("colId");
    if (this.game.board.isEmpty(row, col)) {
      this.game.playHumanMove(row, col);
      $clicked.addClass("markX");
      $clicked.html("<img src='./images/puppy.png' />");
    } else {
      console.log("It looks like you clicked on a square that's already taken");
    }
  };

})();
