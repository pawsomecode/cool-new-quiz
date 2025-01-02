input.onButtonPressed(Button.A, function () {
    if (shownrandomoutcome == 0) {
        basic.showIcon(IconNames.Yes)
    } else {
        if (randomoutcome == outcome) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (shownrandomoutcome == 0) {
        basic.showIcon(IconNames.No)
    } else {
        if (randomoutcome == outcome) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
})
let shownrandomoutcome = 0
let randomoutcome = 0
let outcome = 0
basic.showString("Play")
let num1 = randint(1, 10)
let num2 = randint(1, 10)
outcome = num1 + num2
randomoutcome = randint(2, 20)
basic.showString("" + (num1))
basic.showString("+")
basic.showString("" + (num2))
if (randomoutcome % 2 == 1) {
    basic.showString("" + (outcome))
    shownrandomoutcome = 0
} else {
    basic.showString("" + (randomoutcome))
    shownrandomoutcome = 1
}
