import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=%209&&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies); // ren 1
        setLoading(false); // ren2
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
