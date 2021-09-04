const colors = jest.createMockFromModule('colors')

const unity = s => s
colors.bgRed = {}
colors.blue = colors.bgRed.white = unity

module.exports = colors