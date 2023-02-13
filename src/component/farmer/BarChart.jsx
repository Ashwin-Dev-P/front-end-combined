import React from 'react';
import {Chart as ChartJS, BarElement} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement
)

const BarChart = () => {

    

return (
    <div>
        <Bar
            height={600}

        />
    </div>
  )
}

export default BarChart;
