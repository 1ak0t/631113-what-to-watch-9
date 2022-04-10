import {Reviews} from '../../types/reviews';
import Review from '../review/review';

function MovieReviews() {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </div>
    </div>
  );
}

export default MovieReviews;
