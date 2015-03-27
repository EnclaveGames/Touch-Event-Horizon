Touch.Game = function(game) {};
Touch.Game.prototype = {
	create: function() {
		// window.addEventListener("deviceorientation", this.handleOrientation, true);
		// window.navigator.vibrate(100);
		var ongoingTouches = new Array();
		var el = document.getElementsByTagName("canvas")[0];
		el.addEventListener("touchstart", this.handleStart, false);
		//el.addEventListener("touchmove", this.handleMove, false);
		this.add.text(20, 20, 'Hello touch world', { font: "16px Arial", fill: "#fff" });
	},
	update: function() {
		// update function
	},
	render: function() {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	},
	handleStart: function(evt){
//		evt.preventDefault();
		var el = document.getElementsByTagName("canvas")[0];
		var ctx = el.getContext("2d");
		var touches = evt.changedTouches;

		for (var i=0; i < touches.length; i++) {
			ongoingTouches.push(copyTouch(touches[i]));
			if (touches[i]>=0) {
				var color = "red";
			}
			else if (touches[i]>=2) {
				var color = "green";
			}
			else {
				var color = "black";
			}

			//ctx.beginPath();
    		//ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0,2*Math.PI, false);  // a circle at the start
    		//alert(color);
    		ctx.fillStyle = color;
    		ctx.fill();
    		//log("touchstart:"+i+".");
    	}
    },
    handleMove: function(evt){
    	evt.preventDefault();
    	var el = document.getElementsByTagName("canvas")[0];
    	var ctx = el.getContext("2d");
    	var touches = evt.changedTouches;

    	for (var i=0; i < touches.length; i++) {
    		var color = colorForTouch(touches[i]);
    		var idx = ongoingTouchIndexById(touches[i].identifier);

    		if(idx >= 0) {
    			this.//log("continuing touch "+idx);
    			ctx.beginPath();
    			//log("ctx.moveTo("+ongoingTouches[idx].pageX+", "+ongoingTouches[idx].pageY+");");
    			ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    			//log("ctx.lineTo("+touches[i].pageX+", "+touches[i].pageY+");");
    			ctx.lineTo(touches[i].pageX, touches[i].pageY);
    			ctx.lineWidth = 4;
    			ctx.strokeStyle = color;
    			ctx.stroke();

      	ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
      	//log(".");
  		} else {
  			//log("can't figure out which touch to continue");
  			}
		}	
	}

};