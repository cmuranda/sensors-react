import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import NumericChart from "./numeric-chart";

const columns = [
    { field: 'timestamp', headerName: 'Timestamp', width: 450 },
    { field: 'value', headerName: 'Value', width: 350 },
];

const host = `${process.env.REACT_APP_BACKEND_URL}`

const Home = () => {
    const [filters, setFilters] = useState({})
    const [chartType, setSelectedChartType] = useState("")
    const [selectedSensor, setSelectedSensor] = useState("")
    const [sensors, setSensors] = useState([])
    const [sensorData, setSensorData] = useState([])

    const changeDataType = (dataType) => {    
        const sensors = filters[dataType]
        setSensors(sensors)
        setSelectedSensor(sensors[0])
        setSelectedChartType(dataType)
    }

    useEffect(() => {
        if (!selectedSensor) {
            return
        }

        fetch(`${host}/sensors/${selectedSensor}`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data")
                }
                return res.json()
            })
            .then(data => {
                setSensorData(data)
            })
            .catch(error => {
                console.error(error)
            })

    }, [selectedSensor])
    

    useEffect(() => {
        fetch(`${host}/filter-data`)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data")
                }
                return res.json()
            })
            .then(data => {
                setFilters(data)
                const key = Object.keys(data)[0]
                setSensors(data[key])
                setSelectedSensor(data[key][0])
                setSelectedChartType(key)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const firstLetterUppercase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <div className="form-row">
                <form>
                    <select
                        value={chartType}
                        onChange={(e) => changeDataType(e.target.value)}
                    >
                        {filters && Object.keys(filters).map(filter => <option value={filter}>{firstLetterUppercase(filter)}</option>)}
                    </select>

                    <select
                        value={selectedSensor}
                        onChange={(e) => setSelectedSensor(e.target.value)}
                    >
                        {sensors && sensors.map(sensor => <option value={sensor}>{firstLetterUppercase(sensor)}</option>)}

                    </select>
                </form>
            </div>
            {chartType === "text" && <DataGrid rows={sensorData} columns={columns} />}
            {chartType === "numeric" && sensorData.length > 0 && <NumericChart data={sensorData} />}
        </div>
    );
}

export default Home;