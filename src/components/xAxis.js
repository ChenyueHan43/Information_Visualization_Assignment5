//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate




function XAxis(props){
    const { xScale, height, width, axisLable } = props;
    //Note:
    //1. XAxis works for two cases: the xScale is linear (i.e., scatter plot) and the xScalse is discrete (i.e., bar chart)
    //2. you can use typeof(xScale.domain()[0]) to decide the return value
    //3. if typeof(xScale.domain()[0]) is a number, xScale is a linear scale; if it is a string, it is a scaleBand.

    if(xScale) {
        const isLinear = typeof(xScale.domain()[0]) === 'number';
        const ticks = isLinear ? xScale.ticks() : xScale.domain();
        const getX = tick => isLinear ? xScale(tick) : xScale(tick) + xScale.bandwidth() / 2;

        return <g transform={`translate(0, ${height})`}>
            <line x2={width} stroke="black" />
            {ticks.map((tick, i) => (
                <g key={i} transform={`translate(${getX(tick)}, 0)`}>
                    {isLinear && <line y2={6} stroke="black" />}
                    {isLinear
                        ? <text style={{ textAnchor: 'middle', fontSize: '10px', fontFamily: 'Arial' }} y={18}>{tick}</text>
                        : <text style={{ textAnchor: 'start', fontSize: '10px', fontFamily: 'Arial' }} transform="rotate(75)" x={4} dy="0.32em">{tick}</text>
                    }
                </g>
            ))}
            <text style={{ textAnchor: 'end', fontSize: '15px', fontFamily: 'Arial' }} x={width} y={-12}>{axisLable}</text>
        </g>
    } else {
        return <g></g>
    }
}

export default XAxis