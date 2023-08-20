import React from 'react';
import wineData from '../src/myoutput';
import './styles.css';

const WineStatistics = () => {
  const calculateStatistics = () => {
    const statisticsByClass = {};

    wineData.forEach(entry => {
      const alcoholClass = entry.Alcohol;

      if (!statisticsByClass[alcoholClass]) {
        statisticsByClass[alcoholClass] = [];
      }

      statisticsByClass[alcoholClass].push(parseFloat(entry.Flavanoids));
    });

    const results = [];
    for (const alcoholClass in statisticsByClass) {
      const values = statisticsByClass[alcoholClass];
      const mean = calculateMean(values);
      const median = calculateMedian(values);
      const mode = calculateMode(values);

      results.push({
        alcoholClass,
        mean,
        median,
        mode,
      });
    }

    return results;
  };

  const calculateMean = data => {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  };

  const calculateMedian = data => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
  };

  const calculateMode = data => {
    const frequencyMap = {};
    data.forEach(value => {
      if (!frequencyMap[value]) {
        frequencyMap[value] = 0;
      }
      frequencyMap[value]++;
    });

    let mode = null;
    let maxFrequency = 0;
    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        mode = value;
      }
    }
    return mode;
  };

  const renderTable = () => {
    const statistics = calculateStatistics();

    return (
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {statistics.map(entry => (
              <th key={entry.alcoholClass}>Class {entry.alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {statistics.map(entry => (
              <td key={entry.alcoholClass}>{entry.mean}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {statistics.map(entry => (
              <td key={entry.alcoholClass}>{entry.median}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {statistics.map(entry => (
              <td key={entry.alcoholClass}>{entry.mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Flavanoids Data Set Statistics</h1>
      {renderTable()}
    </div>
  );
};

export default WineStatistics;
