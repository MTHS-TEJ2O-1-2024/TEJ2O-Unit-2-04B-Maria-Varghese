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

input.onButtonPressed(Button.A, function(){
    basic.showString('The temperature is')
    temperature = input.temperature()
    basic.showNumber(temperature)
})
