/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows the temperature of a place
*/

//our variable for temperature
let temperature: Number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    basic.showString('Temperature is')
    temperature = input.temperature()
    basic.showNumber (input.temperature())
})
