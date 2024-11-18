// // src/api/imageService.js

// import axios from 'axios';
// import { saveToLocalStorage, getFromLocalStorage, isCacheExpired, updateCacheTimestamp } from '../utils/localStorageHelper';

// export async function fetchImagesList(expiryTime = 3600 * 1000) { // Varsayılan süre: 1 saat
//     const cacheKey = "imagesList";

//     if (!isCacheExpired(cacheKey, expiryTime)) {
//         const cachedData = getFromLocalStorage(cacheKey);
//         if (cachedData) {
//             console.log("LocalStorage'den veri yüklendi.");
//             return cachedData;
//         }
//     }

//     try {
//         const response = await axios.get("https://api.elcitr.com/api/images");
//         const data = response.data;

//         saveToLocalStorage(cacheKey, data);
//         updateCacheTimestamp(cacheKey);

//         console.log("API'den veri yüklendi ve cache güncellendi.");
//         return data;
//     } catch (error) {
//         console.error("API'den veri alınamadı:", error);
//         return [];
//     }
// }


//     // API'den veri çek ve localStorage'e kaydet
//     try {
//         const response = await axios.get("https://api.elcitr.com/api/images");
//         const data = response.data;

//         saveToLocalStorage(cacheKey, data);
//         updateCacheTimestamp(cacheKey);

//         console.log("API'den veri yüklendi ve cache güncellendi.");
//         return data;
//     } catch (error) {
//         console.error("API'den veri alınamadı:", error);
//         return [];
//     }

