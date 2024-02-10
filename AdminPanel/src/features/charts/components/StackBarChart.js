import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import TitleCard from '../../../components/Cards/TitleCard';
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  function StackBarChart(){
  
      const options = {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                },
            },
        };
        
        const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'];
        
        const data = {
          labels,
          datasets: [
            {
              label: 'Store 1',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Store 2',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: 'rgba(53, 162, 235, 1)',
            },
            {
                label: 'Store 3',
                data: labels.map(() => { return Math.random() * 1000 + 500 }),
                backgroundColor: 'rgba(235, 162, 235, 1)',
              },
          ],
        };
  
      return(
        <TitleCard title={"Продажи"} topMargin="mt-2">
              <Bar options={options} data={data} />
        </TitleCard>
  
      )
  }
  
  
  export default StackBarChart