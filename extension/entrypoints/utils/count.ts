export function increaseTotalCount() {
    chrome.storage.sync.get(['totalCount'], (result) => {
        const count = parseInt(result.totalCount || '0', 10);
        chrome.storage.sync.set({ totalCount: count + 1 }, () => {
        });
    });
}

export function increaseUnsafeCount() {
    chrome.storage.sync.get(['unsafeCount'], (result) => {
        const count = parseInt(result.unsafeCount || '0', 10);
        chrome.storage.sync.set({ unsafeCount: count + 1 }, () => {
        });
    });
}