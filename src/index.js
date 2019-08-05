/**
 * LightningChartJS example that showcases creation of OHLC-chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const {
    lightningChart,
    AxisTickStrategies,
    OHLCFigures,
    AxisScrollStrategies,
    emptyLine
} = lcjs

// Import data-generator from 'xydata'-library.
const {
    createOHLCGenerator
} = require('@arction/xydata')

// Decide on an origin for DateTime axis.
const dateOrigin = new Date(2018, 0, 1)

// Create a XY Chart with DateTime X-axis using previously defined origin.
const chart = lightningChart().ChartXY({
    defaultAxisXTickStrategy: AxisTickStrategies.DateTime(dateOrigin)
})
    .setTitle('Open-High-Low-Close')
    .setAutoCursor(cursor => {
        cursor.disposeTickMarkerY()
        cursor.setGridStrokeYStyle(emptyLine)
    })

chart.getDefaultAxisY()
    .setInterval(90, 110)
    .setTitle('USD')
    .setScrollStrategy(AxisScrollStrategies.expansion)

// Add a OHLC series with Bar as type of figures.
const series = chart.addOHLCSeries({ positiveFigure: OHLCFigures.Bar })
    .setName('Open-High-Low-Close')

// Generate some points using 'xydata'-library.
const dataSpan = 10 * 24 * 60 * 60 * 1000
const dataFrequency = 1000 * 60

createOHLCGenerator()
    .setNumberOfPoints(dataSpan / dataFrequency)
    .setDataFrequency(dataFrequency)
    .generate()
    .toPromise()
    .then(data => {
        series.add(data)
    })
