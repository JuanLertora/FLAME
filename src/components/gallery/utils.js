import axios from 'axios';

const api_key = import.meta.env.VITE_TOKEN_FLICKR || ''
const user_id = import.meta.env.VITE_USER_ID  || ''

const expirationTime = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
const currentTime = new Date().getTime();

export async function getGalleryPhotos () {
    const { data } = await axios.get(`https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${api_key}&user_id=${user_id}%40N02&format=json&nojsoncallback=1`);
    if (!data.code) {
        const { photos } = data
        localStorage.setItem('galleryData', JSON.stringify(photos.photo));
        localStorage.setItem('galleryDataTimestamp', new Date().getTime().toString());
        return { photos, success: true}
    }
    return { photos: [], success: false}
}

export function imageUrl({server, id, secret}) { return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}

export function getDataCache(setPhotos, setIsLoading) {
    const cachedData = localStorage.getItem('galleryData');
    const cachedTimestamp = localStorage.getItem('galleryDataTimestamp');
    if (cachedData && cachedTimestamp) {
      if (currentTime - parseInt(cachedTimestamp, 10) < expirationTime) {
        // Si los datos están dentro del período de validez, usa los datos en caché
        setPhotos(JSON.parse(cachedData));
        setIsLoading(false);
        return true;
      }
    } 
    return false
  }