input.onButtonPressed(Button.A, function () {
    プレイヤー.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    プレイヤー.change(LedSpriteProperty.X, 1)
})
let スタートからの時間 = 0
let プレイヤー: game.LedSprite = null
let りんご = game.createSprite(randint(0, 4), 0)
プレイヤー = game.createSprite(2, 4)
let 得点 = 0
let スタートした時間 = input.runningTime()
basic.forever(function () {
    スタートからの時間 = input.runningTime() - スタートした時間
    if (スタートからの時間 <= 10000) {
        りんご.change(LedSpriteProperty.Y, 1)
        if (りんご.isTouching(プレイヤー)) {
            得点 += 1
        }
        if (りんご.get(LedSpriteProperty.Y) == 4) {
            りんご.delete()
            りんご = game.createSprite(randint(0, 4), 0)
        }
        basic.pause(1000)
    } else {
        basic.showString("SCORE")
        basic.showNumber(得点)
    }
})
