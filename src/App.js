import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
    <div className="App">
      <ul>
        <li>
          css
        </li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
      <Fix/>
    </div>

  );
}

const Header = () => {
  return (
    <div>
     <a href="https://pzz.by/">Top</a>
     <a href="https://dominos.by/">News</a>
     <a href="https://dodopizza.by/minsk">Home</a>
    </div>
  )
}

const Fix = () => {
  return (
    <div>
      <h1>Ёлупукенен</h1>
    </div>
  )
}

export default App;
