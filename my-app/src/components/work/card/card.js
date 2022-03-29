import './card.css';
import {useState} from 'react';

function Card(props) {
    return (
    <div className={`card ${props.position%2 ? "even" : "odd"}`}>
        <div className="card-info_container">
            <h1 className="info_container-name">{props.name}</h1>
            <a className="info_container-link" href={props.linkSource}>{props.linkTitle}</a>
            <p className="info_container-description" >{props.description}</p>
        </div>
        <div className="card-gif_container">
            <img className="card-gif" src={props.gif} alt="Work Item"></img>
            <div className="gif_container-shadow"></div>
        </div>
    </div>
  );
}

export default Card;
