const dbName = 'ImageEditorDB';
const storeName = 'images';

function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id' });
            }
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onerror = function (event) {
            reject(new Error(`Database error: ${event.target.errorCode}`));
        };
    });
}

export async function saveToIndexedDB(key, value) {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    store.put({ id: key, value });
}

export async function getFromIndexedDB(key) {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    return new Promise((resolve, reject) => {
        const request = store.get(key);
        request.onsuccess = function (event) {
            resolve(event.target.result ? event.target.result.value : null);
        };
        request.onerror = function (event) {
            reject(new Error(`Error getting data from IndexedDB: ${event.target.errorCode}`));
        };
    });
}

export async function isCacheExpiredInIndexedDB(key, expiryTime = 3600 * 1000) {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readonly');
    const store = transaction.objectStore(storeName);
    return new Promise((resolve, reject) => {
        const request = store.get(key);
        request.onsuccess = function (event) {
            const data = event.target.result;
            if (!data || Date.now() - data.timestamp > expiryTime) {
                resolve(true);
            } else {
                resolve(false);
            }
        };
        request.onerror = function (event) {
            reject(new Error(`Error checking cache expiration in IndexedDB: ${event.target.errorCode}`));
        };
    });
}

export async function updateCacheTimestampInIndexedDB(key) {
    const db = await openDB();
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    const timestamp = Date.now();
    store.put({ id: key, timestamp });
}
