import { useState } from 'react';
import FormStars from '../form-star/form-star';

function ReviewForm():JSX.Element{
  const [stars, setStars] = useState<number>(0);
  const [reviewDescription, setReviewDescription] = useState<string>('');

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review {stars}
      </label>
      <FormStars setStars={setStars}/>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewDescription}
        onChange={(e) => setReviewDescription(e.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>);
}

export default ReviewForm;
