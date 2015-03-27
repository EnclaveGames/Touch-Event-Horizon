Touch.Game = function(game) {};
Touch.Game.prototype = {
	create: function() {
		// window.addEventListener("deviceorientation", this.handleOrientation, true);
		// window.navigator.vibrate(100);

		this.add.text(20, 20, 'Hello touch world', { font: "16px Arial", fill: "#fff" });
	},
	update: function() {
		// update function
	},
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	}
};