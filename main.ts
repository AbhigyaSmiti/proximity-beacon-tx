radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -87) {
        basic.showIcon(IconNames.StickFigure)
    } else {
        basic.clearScreen()
    }
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(200)
})
