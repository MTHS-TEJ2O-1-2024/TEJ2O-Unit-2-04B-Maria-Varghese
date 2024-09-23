/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maria
 * Created on: Sep 2024
 * This program shows temperature
*/

//our variable for a temperature
let temperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.showString('The temperature is')

input.onButtonPressed(Button.A, function(){
    temperature = input.temperature()
    basic.showNumber(temperature)
})
