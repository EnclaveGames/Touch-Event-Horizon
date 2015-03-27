Touch.Game = function(game) {};
Touch.Game.prototype = {
	create: function() {
		// window.addEventListener("deviceorientation", this.handleOrientation, true);
		// window.navigator.vibrate(100);
		Touch.playerOneCounter=0;
		Touch.playerTwoCounter=0;
		var el = document.getElementsByTagName('canvas')[0];
		this.ctx = el.getContext('2d');
		el.addEventListener("touchstart", this.handleStart, false);
		//el.addEventListener("touchmove", this.handleMove, false);
		Touch._text = this.add.text(20, 20, 'Hello touch world', { font: "16px Arial", fill: "#fff" });

		
	},
	update: function() {
		// update function

	},
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	},
	handleStart: function(evt){

		for (var i = evt.touches.length - 1; i >= 0; i--) {
			var touch = evt.touches[i];
			var x = evt.touches[i].pageX;
			var y = evt.touches[i].pageY;
			//alert(x+" "+y);
			//Touch._text.setText(x+" "+y);
			if (x>=250){
				Touch.playerTwoCounter+=1;
				Touch._text.setText(Touch.playerOneCounter+" "+Touch.playerTwoCounter);
			}
			if (x<=250){
				Touch.playerOneCounter+=1;
				Touch._text.setText(Touch.playerOneCounter+" "+Touch.playerTwoCounter);
			}
		}
		
	},
	handleMove: function(evt){

	}

};