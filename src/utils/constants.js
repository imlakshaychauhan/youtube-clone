export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" + process.env.REACT_APP_API_KEY;

export const YOUTUBE_ID_API_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + process.env.REACT_APP_API_KEY;

export const YOUTUBE_SEARCH_API_URL = "https://auto-suggest-queries.p.rapidapi.com/suggestqueries?query=";

export const MAX_LIVE_CHAT_COUNT = 25;