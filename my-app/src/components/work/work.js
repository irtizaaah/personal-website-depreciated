import './work.css';
import Card from './card/card';
import {useState} from 'react';
import workItemsFile from './work-items.json'

function Work() {

  const [workItems, setWorkItems] = useState([...workItemsFile.workItems]);
    
  function addItem() {
    setWorkItems(prevState => {
          return [...prevState, `Thing ${prevState.length + 1}`]
      })
  }
  
  const workElements = workItems.map(item => 
    <Card 
      name = {item.name} 
      gif = {process.env.PUBLIC_URL + item.gif} 
      description = {item.description} 
      linkSource = {item.link.source}
      linkTitle = {item.link.title}
      position = {item.position}
    />
  );
  
  return (
    <div className="work">
      <h1 className="work-heading">Some of My Work</h1>
      <div className="work-item_wrapper">
          {workElements}
      </div>
    </div>
  );
}

export default Work;
