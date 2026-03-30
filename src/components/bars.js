

function Bars(props) {
    const {data, xScale, yScale, height, selectedStation, setSelectedStation} = props;

    //Note: 
    //the if(data){...} means when data is not null, the component will return the bars; otherwise, it returns <g></g>
    //we use the if ... else ... in this place so that the code can work with the SSR in Next.js;
    if(data){
        return <g>
            {data.map((d, i) => (
                <rect key={i}
                    x={xScale(d.station)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill={d.station === selectedStation ? 'red' : 'steelblue'}
                    stroke="black"
                    strokeWidth={1}
                    onMouseEnter={() => setSelectedStation(d.station)}
                    onMouseOut={() => setSelectedStation(null)}
                />
            ))}
            </g>
    } else {
        return <g></g>
    }
}

export default Bars