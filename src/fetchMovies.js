export default async function fetchMovies() {
    let API_key = '3656ac2d333ee897f67c9fc0d8f8b39d';

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`,
        );
        if (!response.ok) {
            throw new Error('Error occired while fetching data');
        }
        const data = await response.json();
        let sliceResult = data.results;
        sliceResult = sliceResult.slice(0,10);
        console.log(sliceResult)
        return sliceResult
    } catch (error) {
        alert('Error fetching data:', error);
        throw error;
    }
}