import './style.css';
import { browser } from 'wxt/browser';

document.body.innerHTML = `
  <div id="app">
    <header>
      <h1>Welcome to LinkDefender!</h1>
    </header>
    
    <main>
    <button id="toggleButton">Toggle</button>
      <section>
        <h2>Your Current Statistics</h2>
        <ul class="stats-list">
          <li>
            <strong>Total Links:</strong>
            <span id="totalCount">0</span>
          </li>
          <li>
            <strong>Unsafe Links:</strong>
            <span id="unsafeCount">0</span>
          </li>
        </ul>
      </section>
      
      <footer>
        <p>Made with ❤️ by <a href="https://wuemeli.com" target="_blank">Wuemeli</a></p>
        <p>Pictures by Freepik from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a></p>
      </footer>
    </main>
  </div>
`;

chrome.storage.local.get(['totalCount', 'unsafeCount'], (data) => {
  //@ts-ignore
  document.getElementById('totalCount').innerText = data?.totalCount ?? 0;
  //@ts-ignore
  document.getElementById('unsafeCount').innerText = data?.unsafeCount ?? 0;
});

chrome.storage.onChanged.addListener((changes) => {
  const name = Object.keys(changes)[0];

  if (name === 'totalCount') {
    //@ts-ignore
    document.getElementById('totalCount').innerText = changes[name]?.newValue ?? 0;
  }

  if (name === 'unsafeCount') {
    //@ts-ignore
    document.getElementById('unsafeCount').innerText = changes[name]?.newValue ?? 0;
  }
});