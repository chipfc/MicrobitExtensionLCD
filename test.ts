let item = 0
I2C_LCD1602.LcdInit(0)
basic.forever(() => {
    item += 1
    basic.pause(1000)
})
