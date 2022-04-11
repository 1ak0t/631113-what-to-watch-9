import {ChangeEvent, useState} from 'react';
import {store} from '../../store';
import {addReviewAction} from '../../store/api-actions';
import {MouseEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type ReviewFormProps = {
  filmId: number;
}

function ReviewForm({filmId} : ReviewFormProps): JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [buttonState, setButtonState] = useState(true);

  const navigate = useNavigate();

  const reviewChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setComment(value);
    if (value.length > 50 && value.length < 400 && rating !== 0) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  };

  const handleStarClick = (stars: number) => {
    setRating(stars);
  };

  const handleFormSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    store.dispatch(addReviewAction({filmId, comment, rating}));
    navigate(AppRoute.Film.slice(0, -3) + filmId);
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onClick={() => handleStarClick(10)}/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onClick={() => handleStarClick(9)}/>
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onClick={() => handleStarClick(8)}/>
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onClick={() => handleStarClick(7)}/>
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onClick={() => handleStarClick(6)}/>
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onClick={() => handleStarClick(5)}/>
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onClick={() => handleStarClick(4)}/>
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onClick={() => handleStarClick(3)}/>
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onClick={() => handleStarClick(2)}/>
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onClick={() => handleStarClick(1)}/>
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea onChange={reviewChangeHandler} value={comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" onClick={handleFormSubmit} disabled={buttonState}>Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
