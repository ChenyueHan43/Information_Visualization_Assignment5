
import React from 'react';
function getColor(selectedStation, station) {
    return station === selectedStation ? 'red' : 'steelblue';
}

function getRadius(selectedStation, station) {
    return station === selectedStation ? 10 : 5;
}

function Points(props) {
    const {data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY} = props;

    if(data){
        const selected = data.find(d => d.station === selectedStation);
        return <g>
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(selectedStation, d.station)}
                    fill={getColor(selectedStation, d.station)}
                    stroke="black"
                    strokeWidth={1}
                    onMouseEnter={(event) => { setSelectedStation(d.station); setTooltipX(event.pageX); setTooltipY(event.pageY); }}
                    onMouseOut={() => { setSelectedStation(null); setTooltipX(null); setTooltipY(null); }}
                />
            ))}
            {selectedStation && <rect x={0} y={0} width={width} height={height} fill="yellow" opacity={0.4} style={{pointerEvents: 'none'}}/>}
            {selectedStation && selected && (
                <circle
                    cx={xScale(selected.tripdurationS)}
                    cy={yScale(selected.tripdurationE)}
                    r={10}
                    fill="red"
                    stroke="black"
                    strokeWidth={1}
                    style={{pointerEvents: 'none'}}
                />
            )}
        </g>
    } else {
        return <g></g>
    }
}

export default Points
