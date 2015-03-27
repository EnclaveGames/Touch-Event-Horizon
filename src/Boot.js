var Touch = {
	_WIDTH: 480,
	_HEIGHT: 320
};
Touch.Boot = function(game) {};
Touch.Boot.prototype = {
	preload: function() {
		// this.load.image('preloaderBg', 'img/loading-bg.png');
		// this.load.image('preloaderBar', 'img/loading-bar.png');
	},
	create: function() {
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.setScreenSize(true);
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.state.start('Preloader');
	}
};