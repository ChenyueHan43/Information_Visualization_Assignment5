
import XAxis from './xAxis';
import YAxis from './yAxis';
import Bars from './bars';

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation} = props;
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height} selectedStation={selectedStation} setSelectedStation={setSelectedStation}/>
        <YAxis yScale={yScale} height={height} width={width} axisLable={"Bikers star from"}/>
        <XAxis xScale={xScale} height={height} width={width} />
    </g>
}

export default BarChart
