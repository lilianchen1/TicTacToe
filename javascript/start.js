$.fn.startPlay = function() {
  return new $.Game(this);
};

$.Game = function(el) {
  this.$el = $(el);
  var $button = this.$el.find("button");
  var that = this;
  $button.on("click", function(event) {
    var player = event.currentTarget.className;
    that.$el.addClass("hidden");
    var $el = $("div.game");
    var game = new window.TTT.Game(player);
    var view = new window.TTT.View(game, $el);
    view.setUpBoard();
    view.startGame();
  });
};
