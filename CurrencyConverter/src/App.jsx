import { useEffect, useState } from 'react';
import useCurrencyinfo from './hooks/useCurrencyInfo';
import './App.css';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';

function App() {
  const [from, setFrom] = useState('From');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [fromAmount, setFromAmount] = useState(0);

  const [currencyList, currencyObject] = useCurrencyinfo(fromCurrency);

  const [to, setTo] = useState('To');
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState('inr');
  const handleSwap = () => {
    //currency
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    //amount
    setToAmount(fromAmount);
    setFromAmount(toAmount);
  };

  const handleConvertion = () => {
    setToAmount(fromAmount * currencyObject[toCurrency]);
    console.log('fromAmount', fromAmount);
    console.log('toCurrency', currencyObject[toCurrency]);
  };
  return (
    <>
      <Input
        lable={from}
        setCurrency={setFromCurrency}
        currency={fromCurrency}
        setAmount={setFromAmount}
        amount={fromAmount}
        currencyList={currencyList}
      />
      <Button
        text="swap"
        onClick={handleSwap}
        className="p-2 text-black border-2 border-black m-4"
      />

      <Input
        lable={to}
        setCurrency={setToCurrency}
        currency={toCurrency}
        setAmount={setToAmount}
        amount={toAmount}
        currencyList={currencyList}
      />
      <Button
        text="Convert"
        onClick={handleConvertion}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        to="to"
        className="p-2 text-black border-2 border-black m-4"
      />
    </>
  );
}

export default App;
