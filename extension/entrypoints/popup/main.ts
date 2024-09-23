import './style.css';

document.body.innerHTML = `
  <div id="app">
    <header>
      <h1>Welcome to LinkDefender!</h1>
    </header>
    
    <main>
      <section>
        <h2>Your Current Statistics</h2>
        <ul class="stats-list">
          <li>
            <strong>Normal Links:</strong>
            <span id="normalCount">0</span>
          </li>
          <li>
            <strong>Safe Links:</strong>
            <span id="safeCount">0</span>
          </li>
          <li>
            <strong>Unsafe Links:</strong>
            <span id="unsafeCount">0</span>
          </li>
        </ul>
      </section>
      
      <footer>
        <p>Made with ❤️ by <a href="https://wuemeli.com" target="_blank">Wuemeli</a></p>
      </footer>
    </main>
  </div>
`;

/*
document.addEventListener('DOMContentLoaded', async function () {
  browser.storage.local.get({ normalCount, safeCount, unsafeCount }, function (result: any) {
    document.getElementById('normalCount').textContent = result.normalCount || 0;
    document.getElementById('safeCount').textContent = result.safeCount || 0;
    document.getElementById('unsafeCount').textContent = result.unsafeCount || 0;
  });
});
*/