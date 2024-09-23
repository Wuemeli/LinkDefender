import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="text-2xl font-bold">Welcome to LinkDefender!</h1>
    <p>Here are your current statistics:</p>
    <ul>
      <li>Normal links: <span id="normalCount">0</span></li>
      <li>Safe links: <span id="safeCount">0</span></li>
      <li>Unsafe links: <span id="unsafeCount">0</span></li>
    </ul>
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