import React, { useEffect, useState } from 'react';
import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


function App() {

  const dispatch = useDispatch();



  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch);

  const amount = useSelector((state: State) => state.bank);

  const [chartValues, setChartValues] = useState([amount]);

  useEffect(() => {
    setChartValues([...chartValues, amount]);
  }, [amount]);
  
  const option = {
    chart: {
      type: 'spline',
      zoomType: 'x'
    },
    title: {
        text: 'Transaction History and Account Balance'
    },
    subtitle: {
      text: 'Source: Nemanjas Awesome Bank account'
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    yAxis: {
      alternateGridColor: 'rgba(242, 184, 49, 0.32)',
      title: {
        text: 'Acount Balance'
      }
    },
    plotOptions: {
      spline: {
          marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
          }
      }
    },

    series: [{
      marker: {
        symbol: 'diamond'
      },
      name: 'Transaction History',
      negativeColor: 'red',
      data: chartValues
    }]
  };
  return (
    <div className="App">
      <div className='mainUi'>
        <div className="max-w-sm rounded overflow-hidden shadow-2xl">
          <img className="w-full" src="https://paysend.com/images/how-to-transfer-money-to-someone-else-s-bank-account-1200.png" alt="Account Image"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Your Account Balance</div>
              <p className="font-bold text-xl mb-2"> {amount} kr </p>
            </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-base font-bold py-2 px-4 rounded" onClick={() => depositMoney(1000)}>DEPOSIT</button>
            <button className="bg-red-500 hover:bg-red-700 text-white text-base font-bold py-2 px-4 rounded" onClick={() => withdrawMoney(1000)}>WITHDRAW</button>
            <button className="bg-emerald-800 hover:bg-emerald-700 text-base text-white font-bold py-2 px-4 rounded" onClick={() => bankruptMoney()}>BANKRUPT</button>
          </div>
        </div>
    </div>
    <div className='chart'>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
    </div>
  );
}

export default App;
