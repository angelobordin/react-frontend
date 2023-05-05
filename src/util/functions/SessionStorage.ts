function setSessionStorage(key: string, value: string | number) {
    sessionStorage.setItem(key, value.toString());
};

function getSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key)
};

export { setSessionStorage, getSessionStorage };