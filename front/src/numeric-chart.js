import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { scaleTime } from 'd3-scale';
import { ArgumentScale } from '@devexpress/dx-react-chart';


const chartRootStyle = { marginRight: '20px' };
const inputsContainerStyle = { 
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  padding: '1.5rem'
};

const ChartRoot = props => (
  <Chart.Root {...props} style={chartRootStyle} />
);

function NumericChart(props) {
  const chartData = props.data.map(data => {return {...data, "timestamp": new Date(data["timestamp"])}})

  return (    
    <Paper>
      <Chart data={chartData} rootComponent={ChartRoot}>
        <ArgumentScale factory={scaleTime} />
        <ArgumentAxis />
        <ValueAxis />
        <LineSeries valueField="value" argumentField="timestamp" />
        <ZoomAndPan
          interactionWithArguments='both'
          interactionWithValues='none'
        />
      </Chart>
      <div style={inputsContainerStyle} row>
        <p>Scroll mouse to zoom and hold and move mouse to left/right to pan</p>
      </div>
    </Paper>
  );

}

export default NumericChart
