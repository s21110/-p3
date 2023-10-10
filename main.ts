input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . # # # .
        . # . # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        # # . # #
        . . . . .
        `)
    basic.pause(100)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
})
