import logo from './logo.svg';
import './App.css';
import otter from './images/otter300x300.png'

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='title'>
          <h1>Sea Weasel Apparel</h1>
        </div>

        <div className='content'>

          <div className='cta'>
            <h2>You're the captain now...</h2>
            <p>Sea Weasels swim around all over the place, we don't give a shit. Sign up below to find out when you can get your paws on Sea Weasel Apparel.</p>
            <input placeholder='enter email address'></input>
            <button>Sign up</button>
          </div>

          <div className='image'>
            <img src={otter} alt='sea-weasel'></img>
          </div>

        </div>

        <div className='social'>
          <i class="devicon-facebook-plain"></i>
          <i class="devicon-twitter-original"></i>
          <i class="devicon-linkedin-plain"></i>
        </div>

        <div className='copyright'>
          <p>&copy; Sea Weasel Apparel 2022</p>
        </div>

      </div>

    </div>
  );
}

export default App;
