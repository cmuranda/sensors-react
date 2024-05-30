import NumericChart from "./numeric-chart"

const DataChart = (props) => {
    const chartType = props.chartType
    const sensor = props.sensor
    return (
        <div>
            <NumericChart chartType={chartType} sensor={sensor}/>
        </div>
    )
}

export default DataChart