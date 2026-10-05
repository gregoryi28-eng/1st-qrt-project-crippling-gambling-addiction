/**
 * The first portion of the code will contain the strings and most of the integers. here, the user will ask what they wish to gamble and how much they wish to win, and said process repeats until the targeted amount is reached ($100K or $1 mil, because I haven't decided yet)
 */
/**
 * The second part will contain the probabilities and the conditionals. in this section, the player has a random chance of winning or losing based on amount wished to win within a boolean (e.g. if winProfit is > 150%, then your chances of winning are somewhere between 15-10%. if winProfit is < 150%, then chances of winning significantly increase to 50-30%, and so on and so forth)
 */
/**
 * the "win" condition will be in a relational Boolean, saying targetMoney must be at least whatever amount the user stated at the start
 */
// This entire code will repeat until said target score is met (the user will be able to set this if they wish)
let moneyTotal = 1000
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
game.splash("Welcome to my casino!")
game.splash("Your goal is to leave with $" + "1,000,000")
game.splash("You are starting with $" + moneyTotal + " to gamble")
let gambleAway = game.askForNumber("How much are you putting up?", 10)
let winProfit = game.askForNumber("How much do you want back? (Max: 10x or 1000%)", 10)
for (let index = 0; index < 100; index++) {
    if (winProfit <= 1000) {
        if (Math.percentChance(randint(0, 50.2))) {
            game.splash("You won, congrats!")
            winProfit = winProfit / 100
            moneyTotal = moneyTotal * winProfit
            game.splash("You now have $" + moneyTotal)
            if (moneyTotal >= 1000000) {
                game.splash("Wow… you actually did it…")
                game.setGameOverEffect(true, effects.confetti)
                game.setGameOverPlayable(true, music.melodyPlayable(music.siren), true)
                game.setGameOverMessage(true, "YOU ARE A MILLIONAIRE!!!")
                game.gameOver(true)
            }
        } else {
            game.splash("Oof, better luck next time...")
            moneyTotal = moneyTotal - gambleAway * randint(0.75, 1.5)
            game.splash("You now have $" + moneyTotal)
            if (moneyTotal <= 0) {
                game.setGameOverMessage(false, "HAHA! BROKIE!!")
                game.gameOver(false)
            }
        }
    } else {
        game.splash("Hey, you can't do that! Cheater!")
        game.splash("Get out of my casino, libtard!")
        game.gameOver(false)
        game.setGameOverMessage(false, "You have been BANNED!")
        game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), true)
    }
    gambleAway = game.askForNumber("How much are you putting up?", 10)
    winProfit = game.askForNumber("How much do you want back? (110%, 150%, etc)", 10)
}
