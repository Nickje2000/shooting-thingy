input.onButtonPressed(Button.A, function on_button_pressed_a() {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    playerfire = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
    playerfire.set(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        playerfire.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (playerfire.isTouching(enemy)) {
            game.addScore(1)
        } else if (playerfire.get(LedSpriteProperty.Y) <= 0) {
            playerfire.delete()
        }
        
    }
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    player.change(LedSpriteProperty.X, 1)
})
let enemyfire : game.LedSprite = null
let playerfire : game.LedSprite = null
let enemy : game.LedSprite = null
let player : game.LedSprite = null
game.setLife(4)
game.setScore(0)
player = game.createSprite(2, 4)
enemy = game.createSprite(0, -4)
basic.forever(function on_forever() {
    
    enemy.move(1)
    basic.pause(100)
    enemy.ifOnEdgeBounce()
    enemyfire = game.createSprite(enemy.get(LedSpriteProperty.X), enemy.get(LedSpriteProperty.Y))
    enemyfire.set(LedSpriteProperty.Brightness, 100)
    for (let index2 = 0; index2 < 4; index2++) {
        enemyfire.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
        if (enemyfire.isTouching(player)) {
            game.removeLife(1)
        } else if (enemyfire.get(LedSpriteProperty.Y) >= 4) {
            enemyfire.delete()
        }
        
    }
})
