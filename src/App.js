import logo from './logo.jpg';
import './App.css';
import { Timeline } from './components'


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='heading2Xl'>Leeco</h1>
        <section>
          <p>
            Hello, I'm <strong>Leeco</strong>.  I'm a front-end engineer
            <br />
            This is the exhibition page of my works
          </p>
        </section>

        <section>
          <h2>个人学习的作品</h2>
          <p>
            下面是我自学前端技术时，做过的一些 demo，他们并不成熟完善，只是各种技术的尝试，和我学习历程的一种记录。
          </p>
          <Timeline />
        </section>

        <section>
          <h2>参与开发的作品</h2>
          <p>
            因为一些原因，比如公司后台项目，团队测试项目，保密项目等等，我目前无法展示我参与项目作品。😅
          </p>
        </section>
        <a
          className="App-link"
          href="https://github.com/leecobaby"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
