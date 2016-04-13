var Lobby =  {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('game1','/img/lobby/sumo.png');
        game.load.image('game2','/img/lobby/snake.png');
        game.load.image('game3','/img/lobby/planet.png');
        // game.load.audio('startMusic','/sound/sumo/SumoRunBgmBeforeRace.mp3');
        game.load.audio('select','/sound/lobby/select.mp3');
    
    },

    create: function () {
        game.stage.backgroundColor = '#ffffff';
        select = game.add.audio('select');
        // bgmusic=game.add.audio('startMusic');
        // bgmusic.loopFull(0.5); // use loopFull(volume) to loop the sound

    


        
        //  The numbers given in parameters are the indexes of the frames, in this order: over, out, down
        game1button = game.add.button(screen.availWidth/2 - 400, screen.availHeight*0.55, "game1", this.startGame1, this, 1, 0, 0);
        game1button.scale.setTo(0.3);
        game1button.anchor.set(0.5, 0.5);
        game1button.setOverSound(select);
        game2button = game.add.button(screen.availWidth/2, screen.availHeight*0.55,'game2');
        game2button.scale.setTo(0.3);
        game2button.anchor.set(0.5, 0.5);
        game2button.setOverSound(select);
        game3button = game.add.button(screen.availWidth/2 + 400, screen.availHeight*0.55,'game3');
        game3button.scale.setTo(0.3);
        game3button.anchor.set(0.5, 0.5);
        game3button.setOverSound(select);


    },

  
    startGame1: function () {

        this.state.start('SumoMenu');
    }

};