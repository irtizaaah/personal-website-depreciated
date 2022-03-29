import './nav.css';

function Nav() {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className ="list-item-active">Home</li>
        <li className ="list-item">Connect</li>
        <li className ="list-item">Resume</li>
      </ul>
    </div>
  );
}

export default Nav;
