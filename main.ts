input.onButtonPressed(Button.A, function () {
    motor.moveClockwise(1, stepUnit.Rotations)
    motor.stopMotor()
})
input.onButtonPressed(Button.B, function () {
    motor.moveAntiClockwise(2, stepUnit.Rotations)
    motor.stopMotor()
})
let motor: stepperMotor.Motor = null
led.enable(false)
motor = stepperMotor.createMotor(
DigitalPin.P7,
DigitalPin.P6,
DigitalPin.P4,
DigitalPin.P3
)
motor.setDelay(0)
