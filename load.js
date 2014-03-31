var load_state = {  
    preload: function() { 
        this.game.stage.backgroundColor = '#71c5cf';
        this.game.load.image('player', 'img/player.png');  
        this.game.load.image('bullet', 'img/bullet.png');  
        this.game.load.image('enemy', 'img/enemy.png');  
        this.game.load.audio('shoot', 'assets/jump.wav');
    },

    create: function() {
        // When all assets are loaded, go to the 'menu' state
        this.game.state.start('menu');
    }
};