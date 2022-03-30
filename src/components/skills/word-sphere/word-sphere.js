import './word-sphere.css';
import TagCloud from './tag-cloud.js';
import React, { useState, useEffect } from 'react';

function WordSphere() {
  const [tags, setTags] = useState(['Data\nStructures', 'Algorithm\nAnalysis',
                                    'C++', 'Object Oriented\nProgramming', 'Computer\nArchitecture',
                                    'Assembly\nLanguage', 'Deep\nLearning','Web\nDevelopment','React JS',
                                    'Software\nEngineering', 'Discrete\nStructures', 'Computation\nTheory',
                                    'Java', 'Python'
                                  ]);

  useEffect(() => {
    var tagCloud = TagCloud('.word_sphere-content', tags,{
      radius: 150, // radius in px
      maxSpeed: 'normal', // animation speed (slow, normal, fast)
      initSpeed: 'normal',
      direction: 135, // 0 = top, 90 = left, 135 = right-bottom
      keep: true // interact with cursor move on mouse out
    });
  },[tags]);

  return (
    <div className="word_sphere">
        <div className="word_sphere-content"></div>
    </div>
  );
}

export default WordSphere;
