import './word-sphere.css';
import useWindowDimensions from './utility';
import TagCloud from './tag-cloud.js';
import React, { useState, useEffect } from 'react';

function WordSphere() {
  const {height, width} = useWindowDimensions();
  const radius = width <= 594 ? 120 : 150;

  const [tags, setTags] = useState(["Concepts of Programming Languages", 
                                    "Data Structures", 
                                    "Analysis of Algorithms", 
                                    "Computer Architecture", 
                                    "Operating System",
                                    "Computer Networks",
                                    "Security and Information Assurance", 
                                    "Database Architecture", 
                                    "Deep Learning",
                                    "Web Development",
                                    "Software Engineering", 
                                    "Statistics & Probability for Engineers",
                                    "CS I (Introduction to Programming)", 
                                    "CS II (Object Oriented Programming)", 
                                    "Assembly Language",
                                    "Calculus I - III",
                                    "Linear Algebra",
                                    "Discrete Mathematics",
                                    "Physics (Classical Mechanics)"
                                  ]);
  useEffect(() => {
    var tagCloud = TagCloud('.word_sphere-content', tags,{
      radius: radius, // radius in px
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
