


function YAxis(props){
    const { yScale, height, axisLable } = props;
    if(yScale){
        const ticks = yScale.ticks();
        return <g>
            <line y2={height} stroke="black" />
            {ticks.map((tick, i) => (
                <g key={i} transform={`translate(0, ${yScale(tick)})`}>
                    <line x2={-6} stroke="black" />
<text style={{ textAnchor: 'end', fontSize: '10px', fontFamily: 'Arial' }} x={-8} dy="0.32em">{tick}</text>
                </g>
            ))}
            <text style={{ textAnchor: 'end', fontSize: '15px', fontFamily: 'Arial'}} transform={`translate(20, 0)rotate(-90)`}>
                {axisLable}
            </text>
        </g>
    } else {
        return <g></g>
    }

}

export default YAxis