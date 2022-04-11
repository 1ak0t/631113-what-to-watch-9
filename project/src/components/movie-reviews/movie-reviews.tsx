import Review from '../review/review';
import {Reviews} from '../../types/reviews';

type MovieReviewsProps = {
  reviews: Reviews;
}

function MovieReviews({reviews}: MovieReviewsProps) {

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <Review review={review} key={review.id} />)}
      </div>
    </div>
  );
}

export default MovieReviews;
