import './skills.css';
import BarChart from "./bar-chart/bar-chart.js"
import WordSphere from './word-sphere/word-sphere.js';
import React, { useState, useEffect } from 'react';

function Skills() {

  return (
    <div className="skills">
    <div className='skills-heading_wrapper'>
      <h1 className='heading_wrapper-heading'>What Can I Do?</h1>
    </div>
      <div className='skills-visuals'>
        <div className="visuals-bar_chart_container">
          <h2 className="bar_chart_container-heading">Languages</h2>
          <BarChart />
        </div>
        <div className="visuals-sphere_container">
          <h2 className="sphere_container-heading">Coursework</h2>
          <WordSphere />
          <a className = "sphere_container-credits" href="https://github.com/cong-min">Reactified version of Cong Min's code</a>
        </div>
      </div>
    </div>
  );
}

export default Skills;
