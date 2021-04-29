basic.showNumber(input.compassHeading())
basic.forever(function () {
    led.plotBarGraph(
    input.magneticForce(Dimension.X),
    1000
    )
    serial.writeNumber(0)
    serial.writeValue("total", input.magneticForce(Dimension.Strength))
    serial.writeValue("x", input.magneticForce(Dimension.X))
    serial.writeValue("y", input.magneticForce(Dimension.Y))
    serial.writeValue("z", input.magneticForce(Dimension.Z))
})
