import React, { useEffect, useState } from 'react';
import './App.css';
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
    series: [{
      name: 'Profit',
      data: chartValues
    }]
  };
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000) }>DEPOSIT</button>
      <button onClick={() => withdrawMoney(1000)}>WITHDRAW</button>
      <button onClick={() => bankruptMoney()}>BANKRUPT</button>

      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
}

export default App;
