# React Bar Chart

### Description
A simple and fast bar-chart component built using react.

### installation

```npm install react-easy-bar-chart```

### Usage

```
import React, { Component } from 'react';
import BarChart from 'react-easy-bar-chart';
import './App.css';

class App extends Component {
  render() {
  const data = [
    {
      title:  "Maths",
      value: 10,
      color: "#196f3d",
    },
    {
      title:  "English",
      value: 14,
      color: "#a93226",
    },
    {
      title:  "Physics",
      value: 2,
      color: " #1f618d",
    },
    {
      title:  "Chemistry",
      value: 20,
      color: "#839192",
    },
    {
      title:  "Psychology",
      value: 15,
      color: "#d35400",
    },
    {
      title:  "Biology",
      value: 12,
      color: " #a9cce3",
    },
    {
      title:  "Economics",
      value: 5,
      color: "#2e4053",
    },
    {
      title:  "Social Science",
      value: 6,
      color: "#186a3b",
    },
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Bar Chart!</h1>
        </header>
        <BarChart 
          xAxis='React Bar Chart'
          yAxis="Values"
          height={400}
          width={800}
          data={data}
        />
      </div>
    );
  }
}

export default App;
```
