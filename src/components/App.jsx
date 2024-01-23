import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { loadLocalStorage, saveLocalStorage } from '../js/storage';
import currData from '../js/currdata';
import './App.css';

const getCurrentData = () => {
  const savedData = loadLocalStorage('saved-data');
  return savedData ? savedData : currData;
};

export const App = () => {
  const [data, setData] = useState(getCurrentData);

  useEffect(() => {
    saveLocalStorage('saved-data', data);
  }, [data]);

  return (
    <div className="container appWrapper">
      <Description />
      <Options data={data} setData={setData} />
      <Feedback data={data} />
    </div>
  );
}

