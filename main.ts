input.onButtonPressed(Button.A, function () {
    motor.moveClockwise(200, stepUnit.Steps)
    motor.stopMotor()
})
input.onButtonPressed(Button.B, function () {
    motor.moveAntiClockwise(200, stepUnit.Steps)
    motor.stopMotor()
})
let motor: stepperMotor.Motor = null
motor = stepperMotor.createMotor(
DigitalPin.P7,
DigitalPin.P6,
DigitalPin.P4,
DigitalPin.P3
)
motor.setDelay(5)
basic.forever(function () {
	
})
