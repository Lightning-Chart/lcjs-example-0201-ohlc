# JavaScript OHLC Chart

![JavaScript OHLC Chart](ohlc-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

_Also known as Price Chart, Bar Chart_

**Please note that using LightningChart JS for Trading use cases requires a special license agreement.**
For more information, please [contact us](https://lightningchart.com/contact/).

## What does OHLC chart mean?

OHLC stands for open, high, low, and close. OHLC charts are important because they show the value of a stock over time. The opening price is the price at which a stock was first traded for the day, and it will usually be either higher or lower than the previous day's closing price, depending on how well the stock market has done. The highest price is simply the maximum amount that a share can sell for in order to buy. The lowest point is called the low, and it's simply what it sounds like: the lowest point of trading for that given day.

## What is the function of an OHLC chart in the stock market?

An OHLC chart can be useful for analyzing how a stock's value fluctuates over time. When looking at this chart, it is important to note that the range for each bar will typically depend on the time period being analyzed (e.g., daily or weekly).

## How to read the OHLC chart?

The vertical line on an OHLC chart represents the change in price movement from opening to closing and will have four points: the high point at which the highest price is reached during that day's trading session, the low point at which the lowest price is reached during that day's trading session, and finally, the opening and closing prices for that day.

This example shows basic implementation of OHLC chart using OHLC-series.

```javascript
// OHLCSeries exists inside XY-charts.
const chart = lightningChart().ChartXY()
const ohlcSeries = chart.addOHLCSeries(
    // Specify type of figure used
    { positiveFigure: OHLCFigures.Bar },
)
```

OHLC-series accept data in the form of interface 'XOHLC':

```javascript
const xohlc = [
    // X-position
    0,
    // Opening Y-value
    100,
    // Highest Y-value
    200,
    // Lowest Y-value
    50,
    // Closing Y-value
    75,
]
// Add new segment to series.
ohlcSeries.add(xohlc)
```

`add()` can be called with a single XOHLC-object or with an array of them.

## Anatomy of a Bar figure

A bar figure is formed from three line segments, which can be styled with a single _LineStyle_ object.

[//]: # 'IMPORTANT: The assets will not show before README.md is built - relative path is different!'

![](./assets/bar.png)

## Figure styling

OHLC Series provides an ability to specify styles for both positive and negative candlesticks individually.

```javascript
// Width of both positive and negative candlesticks
const figureWidth = 5.0
// Green color filling
const fillStylePositive = new SolidFill().setColor(ColorRGBA(0, 128, 0))
// Lime color filling
const fillStyleHighlightPositive = new SolidFill().setColor(ColorRGBA(0, 255, 0))
// Black color stroke
const bodyStrokeStyle = new SolidLine().setFillStyle(new SolidFill().setColor(ColorRGBA(0, 0, 0))).setThickness(1.0)
// Green color stroke
const strokeStylePositive = new SolidLine().setFillStyle(new SolidFill().setColor(ColorRGBA(0, 128, 0)))
// Lime color stroke
const strokeStylePositiveHighlight = new SolidLine().setFillStyle(new SolidFill().setColor(ColorRGBA(0, 240, 0)))

ohlcSeries
    // Setting width of figures
    .setFigureWidth(figureWidth)
    // Styling positive candlestick
    .setPositiveStyle((candlestick) =>
        candlestick
            // Candlestick body fill style
            .setBodyFillStyle(fillStylePositive)
            // Candlestick body stroke style
            .setBodyStrokeStyle(bodyStrokeStyle)
            // Candlestick stroke style
            .setStrokeStyle(strokeStylePositive),
    )
    // Styling negative candlestick
    .setNegativeStyle(
        (candlestick) => candlestick,
        // etc ...
    )
```


## API Links

* [XY cartesian chart]
* [Axis tick strategies]
* [Scroll strategies]
* [Figure types]
* [OHLC series]
* [XOHLC datastructure]
* [OHLC generator]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[XY cartesian chart]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/classes/ChartXY.html
[Axis tick strategies]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/variables/AxisTickStrategies.html
[Scroll strategies]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/variables/AxisScrollStrategies.html
[Figure types]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/variables/OHLCFigures.html
[OHLC series]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/classes/ChartXY.html#addOHLCSeries
[XOHLC datastructure]: https://lightningchart.com/js-charts/api-documentation/v8.0.0/types/XOHLC.html
[OHLC generator]: https://lightning-chart.github.io/xydata/classes/ohlcgenerator.html

