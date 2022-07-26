import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStocks } from '../redux/stocks';

const StocksScreen = () => {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    if ((stocks.length) === 0)dispatch(getStocks());
  }, []);
  return (
    <div className="container">
      <h1>Hi</h1>
    </div>
  );
};

export default StocksScreen;
