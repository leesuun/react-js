import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();

        setMovie(json.data.movie);
        // setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image} alt="" />
                    <h2>{movie.title}</h2>
                    <p>{movie.summary}</p>
                    <ul>
                        {movie.genres.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Detail;
