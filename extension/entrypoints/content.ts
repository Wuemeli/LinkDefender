import { getCache, setCache } from "./utils/cache";
import { showWarning } from "./utils/warning";
import { log } from "./utils/log";
import { increaseTotalCount, increaseUnsafeCount } from "./utils/count";

export default defineContentScript({
  matches: ["<all_urls>"],
  async main() {
    const hostname = new URL(location.href).hostname;
    log(`Checking ${hostname}`, "info");

    increaseTotalCount();
    
    if (getCache(hostname) === "safe") {
      log("Website is safe", "safe");
      return;
    } else if (getCache(hostname) === "unsafe") {
      showWarning(location.href);
      log("Website is unsafe", "unsafe");
    } else {
      
      const response = await fetch(`https://linkdefender.wuemeli.com/check/${hostname}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const responseJson = await response.json();

      if (!responseJson.result) {
        setCache(hostname, "safe");
        log("Website is safe", "safe");
      } else {
        showWarning(location.href);
        setCache(hostname, "unsafe");
        increaseUnsafeCount();
        log("Website is unsafe", "unsafe");
      }
    }
  },
});