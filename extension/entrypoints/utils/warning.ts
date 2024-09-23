export function showWarning(url: string) {
    const warningDiv = document.createElement('div');

    warningDiv.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(255, 0, 0, 0.5); z-index: 9999; display: flex; justify-content: center; align-items: center;">
            <div style="padding: 20px; background-color: rgba(0, 0, 0, 0.8); border-radius: 10px; text-align: center; width: 90%; max-width: 400px;">
                <img src="${browser.runtime.getURL('exclamation-mark.webp')}" alt="Warning" style="width: 80px; height: 80px; margin-bottom: 20px;">
                <strong style="font-size: 2em; color: white;">Possible Phishing Attempt</strong><br>
                <div style="font-size: 1.2em; color: white; margin-top: 10px;">
                    The website you are trying to visit is unsafe. Please proceed with caution.
                    If you know what youre doing, click the button below to ignore this warning.
                </div>
                <button id="ignore-warning" style="margin-top: 20px; padding: 10px 20px; background-color: transparent; border: 2px solid red; color: red; border-radius: 5px; font-size: 1em; cursor: pointer;">
                    Ignore Warning
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(warningDiv);

    const ignoreButton = document.getElementById('ignore-warning');
    if (ignoreButton) {
        ignoreButton.addEventListener('click', () => {
            document.body.removeChild(warningDiv);
        });
    }
}
