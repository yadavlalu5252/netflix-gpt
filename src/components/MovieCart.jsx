import { TMDB_IMAGE_URL } from '../utils/constants';  
const MovieCart = ({posterPath}) => {
    return (
        <div>
            <img src={TMDB_IMAGE_URL+posterPath} alt="Movie-Card" />
        </div>
    )
};

export default MovieCart;