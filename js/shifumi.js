/* jQuery */
jQuery(function( $ ) {

/* Multiple choices */
var game_start = [
    "Wanna play real quick ?",
    "Stop'n'Go work"
]
var shifumi = [
    "Shiiii.......",
    "Fuuuu.......",
    "MI !!!"
]
var topick = [
    "rock",
    "paper",
    "scissors"
]
var won = [
    "Well done ! - Dwayne Johnson",
    "Well done ! - Patrick J. Frawley",
    "Well done ! - Claude Lacroix",
    "Égalité, lucky boy !"
]
var lose = [
    "Man, I just 360 double triangle reverse 720 noscope you accross the freaking map !",
    "Sorry, but can you bring someone else to play ?",
    "My man I gotta step up my game, I can't keep playing with you no more.",
    "Take this L boi.",
    "Meek mill, is that you in front on the screen ?!"
]
var dummy = [
    "Pal, what you waiting for ?!",
    "Maaaan, can't you just pick one ?",
    "We know life is hard and life is an ocean of choices but you gotta make them to go forward so what your choice is ?",
    "I know you ain't giving no fork on it, don't you ?",
    "That's freaking boring, mate just play !"
]

/* The rest of these variables */
var pOne
var pnj
var pOneScore = 0
var pnjScore = 0
var game_turn = 0
var result
var wait
var powned
var rpsi = 0
    
    /* Defined */
    $("#play_game").text(game_start[0])

    /* Defined function */
    function playProcess(pOne){
        if (pOne == pnj) {
            $("#textToShow").text(won[3])
        }
        else if (pOne == topick[0] && pnj == topick[2]){
            $("#textToShow").text(won[0])
            pOneScore++
        }
        else if (pOne == topick[1] && pnj == topick[0]){
            $("#textToShow").text(won[1])
            pOneScore++
        }
        else if (pOne == topick[2] && pnj == topick[1]){
            $("#textToShow").text(won[2])
            pOneScore++
        }
        else {
            $("#textToShow").text(powned)
            pnjScore++
        }
    }

    /* Shifumi */
    /* Main */
    $("#play_game").on("click", function(){
        /* Shifumi */


        if ($("#play_game").html() == game_start[0]) {
                $("#play_game").text(game_start[1])
                $("#shifumi_board").css("display","flex")
                $("#HMpoints").text(pOneScore+" - "+pnjScore)

                /* Reset the game */
                $(".rps").fadeIn("fast")

        } else {
                $("#play_game").text(game_start[0])
                $("#shifumi_board").css("display","none")

                /* Reset the game */
                $(".noPickHide, .pickNoHide").attr("class", "rps")
                pOneScore = 0
                pnjScore = 0
        }
        /* Other */
        $(".rps").on("click", function(){

            /* Define the empty variable */
            var alea = Math.random()
            
            if (alea < 0.2){
                wait = dummy[0]
                powned = lose[4]
            }
            else if (alea < 0.4) {
                wait = dummy[1]
                powned = lose[3]
            }
            else if (alea < 0.6) {
                wait = dummy[2]
                powned = lose[2]
            }
            else if (alea < 0.8) {
                wait = dummy[3]
                powned = lose[1]
            }
            else {
                wait = dummy[4]
                powned = lose[0]
            }
            
            if (alea < 0.34)
            {
                pnj = topick[0]
            } else if (alea <= 0.67 ) {
                pnj = topick[1]
            } else {
                pnj = topick[2]
            }
                     
            $(".rps").attr("class", "noPickHide")
            $(this).attr("class", "pickNoHide")
            $(".noPickHide").fadeOut("fast")
            
            
            pOne = this.id
            playProcess(pOne)
            setTimeout(function(){
                    $("#HMpoints").text(pOneScore+" - "+pnjScore);
                })
            setTimeout(function(){
                $(".noPickHide, .pickNoHide").attr("class", "rps");
                $(".rps").fadeIn("fast");
            },500)
            
            //var reset_turn = setTimeout(,)
            
             /* Timer */
                /* Instruction shown
                var wholestuff = setInterval(function(){
                        var gotta_move = setInterval(function(){
                                $("#textToShow").text(shifumi[rpsi++]);
                            },1000);

                        var no_move = setTimeout(function (){
                                clearInterval(gotta_move);
                                $("#textToShow").text(wait);
                                rpsi = 0;
                                },4000);

                    },1000)
               
            clearTimeout(no_move)
            clearInterval(gotta_move)
            clearInterval(wholestuff)*/
            
        })

        

    })
    

/* CSS */
   
})
