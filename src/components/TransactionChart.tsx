import EChartsReact from "echarts-for-react";
import { useExpenseState} from "../store/expenseState";

import '../index.css';

export const TransactionChart = () => {
const {income, expense} = useExpenseState();
    const colorIncome = '#4CAF50'
    const colorExpense = '#F44336'

   const  option = {
        tooltip: {
          trigger: 'item'
        },
        
        legend: {
          top: '10%',
          left: 'center',
          itemStyle : {
            fontColor : 'red'
          },
        },
        series: [
          {
            name: 'Balance Ingresos - Gastos',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            itemStyle :{
              borderColor : 'white'
            },
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            data: [
              { value: income, name: 'Ingresos', itemStyle : {color : `${colorIncome}`}},
              { value: (expense), name: 'Gastos', itemStyle : {color : `${colorExpense}`}},
            ]
          }
        ]
      };
  return (
    <div>
        <h4 className="subtitle">Gráfico</h4>
        <EChartsReact option={ option }/>
    </div>
  )
}


