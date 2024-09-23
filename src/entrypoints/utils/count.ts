export function increaseNormalCount() {
    const count = localStorage.getItem("normalCount");
    if (count !== null) {
        const parsedCount = parseInt(count, 10);
        localStorage.setItem("normalCount", (parsedCount + 1).toString());
    } else {
        localStorage.setItem("normalCount", "1");
    }
}

export function increaseSafeCount() {
    const count = localStorage.getItem("safeCount");
    if (count !== null) {
        const parsedCount = parseInt(count, 10);
        localStorage.setItem("safeCount", (parsedCount + 1).toString());
    } else {
        localStorage.setItem("safeCount", "1");
    }
}

export function increaseUnsafeCount() {
    const count = localStorage.getItem("unsafeCount");
    if (count !== null) {
        const parsedCount = parseInt(count, 10);
        localStorage.setItem("unsafeCount", (parsedCount + 1).toString());
    } else {
        localStorage.setItem("unsafeCount", "1");
    }
}
