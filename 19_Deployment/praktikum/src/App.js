import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Selamat Datang di Website Nizmara Pratama
        </p>
        <a
          className="App-link"
          href="deployment-ara.surge.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nizmarapratama/React_nizmara-pratama
        </a>
      </header>
    </div>
  );
}

export default App;
