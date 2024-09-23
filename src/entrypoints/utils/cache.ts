export function getCache(key: string) {
    if (localStorage.getItem(key)) {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(key));
    } else {
        return false;
    }
}

export function setCache(key: string, value: any) {
    if (localStorage.getItem(key)) {
        return false;
    } else {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
}

export function countCache() {
    let count = 0;
    //todo filter out counts
    for (let i = 0; i < localStorage.length; i++) {
        count++;
    }
    return count;
}