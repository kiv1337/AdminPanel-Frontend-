import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart(){

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  
  const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'];

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'MAU',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  

    return(
      <TitleCard title={"Ежемесячно активные пользователи (в тысячах)"} >
          <Line data={data} options={options}/>
      </TitleCard>
    )
}


export default LineChart