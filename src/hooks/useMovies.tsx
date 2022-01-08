import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movie.interface';

const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        const movies = resp.data.results;
        setPeliculasEnCine(movies);

        setIsLoading(false);
    }

    useEffect(() => {
        // now_playing
        getMovies();
    }, []);

    return {
        peliculasEnCine,
        isLoading
    }
}

export default useMovies;