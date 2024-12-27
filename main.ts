input.onButtonPressed(Button.A, function () {
    vitesse = 25
    wuKong.setAllMotor(vitesse, vitesse)
    Active += 1
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, 0)
    Active += -1
})
let sonor = 0
let vitesse = 0
let Active = 0
basic.forever(function () {
    sonor = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (sonor <= 20 && (sonor > 1 && Active == 1)) {
        wuKong.setAllMotor(-30, 0)
        basic.pause(1000)
    } else if (Active == 1) {
        wuKong.setAllMotor(vitesse, vitesse)
    } else {
        wuKong.setAllMotor(0, 0)
    }
})
