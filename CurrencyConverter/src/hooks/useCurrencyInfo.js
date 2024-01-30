import { useEffect, useMemo, useState } from 'react';

const useCurrencyinfo = (currency) => {
  const [currencyList, setCurrencyList] = useState();
  const [currencyObject, setCurrencyObject] = useState();
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCurrencyObject(res[currency]);
        setCurrencyList(Object.keys(res[currency]));
      });
  }, [currency, setCurrencyList]);

  return [currencyList, currencyObject];
};
export default useCurrencyinfo;
