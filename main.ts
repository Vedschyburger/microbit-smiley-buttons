input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("A")
    basic.clearScreen()
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.AB, function on_button_pressed_a2() {
    basic.showIcon(IconNames.Cow)
    basic.showIcon(IconNames.Snake)
})
