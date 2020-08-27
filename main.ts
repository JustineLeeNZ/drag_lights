input.onButtonPressed(Button.A, function () {
    // Turn on red LED for 3 seconds
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    // Turn on yellow LED for 3 seconds
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    // Turn on green LED for 3 seconds
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    number_extra_flashes = randint(0, 2)
    // Flash yellow LED 6 times + a random number of extra flashes between 0-2
    for (let index = 0; index < 6 + number_extra_flashes; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(250)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    // Flash yellow LED 6 times in 3 seconds
    for (let index = 0; index < 6; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(250)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
let number_extra_flashes = 0
number_extra_flashes = 0
basic.forever(function () {
	
})
