import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  return (
    <div className="app">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt('Введите сумму пополнения', 5)))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt('Введите сумму снятия', 5)))}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
