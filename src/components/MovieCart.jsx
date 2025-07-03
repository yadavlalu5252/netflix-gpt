import { TMDB_IMAGE_URL } from '../utils/constants';  
const MovieCart = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="w-40 h-60 m-2">
            <img src={TMDB_IMAGE_URL+posterPath} alt="Movie-Card" />
        </div>
    )
};

export default MovieCart;