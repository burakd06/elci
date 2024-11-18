// sessionStorage'a veri kaydet
export function saveToSessionStorage(key, value) {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.error('Session Storage quota exceeded');
            // Handle the error (e.g., remove old data, alert the user, etc.)
        } else {
            console.error('Error saving to session storage:', e);
        }
    }
}
// sessionStorage'dan veri oku
export function getFromSessionStorage(key) {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
}

// Cache'in süresinin dolup dolmadığını kontrol et
export function isCacheExpired(key, expiryTime = 3600 * 1000) { // Varsayılan süre: 1 saat
    const timestamp = sessionStorage.getItem(`${key}_timestamp`);
    if (!timestamp) return true;
    return Date.now() - parseInt(timestamp, 10) > expiryTime;
}

// Cache'in zaman damgasını güncelle
export function updateCacheTimestamp(key) {
    sessionStorage.setItem(`${key}_timestamp`, Date.now().toString());
}
