import { reviews } from '../../mocks/reviews';
import { OfferType } from '../../types/Offer';
import { ReviewType } from '../../types/review';
import Rating from '../rating/Rating';
import ReviewForm from '../review-form/review-form';

type ReviewsProps = {
  offer: OfferType;
}

function Reviews({offer}:ReviewsProps):JSX.Element{
  const reviewsForOfer:ReviewType[] = reviews.filter((reviewEl:ReviewType) => reviewEl.offerId === offer.id);
  const timeFormat: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
  };
  return(
    <section className="property__reviews reviews">
      {reviewsForOfer &&
        <h2 className="reviews__title">
          Reviews · <span className="reviews__amount">{reviewsForOfer.length}</span>
        </h2>}
      {reviewsForOfer &&
        <ul className="reviews__list">
          {reviewsForOfer.map((currentReview) => (
            <li key={currentReview.id} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={currentReview.user.avatarUrl}
                    width={54}
                    height={54}
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{currentReview.user.name}</span>
              </div>
              <div className="reviews__info">
                <Rating rating={currentReview.rating} className='reviews'/>
                <p className="reviews__text">
                  {currentReview.comment}
                </p>
                <time className="reviews__time" dateTime="2019-04-24">
                  {(new Date(currentReview.date)).toLocaleString('en-US', timeFormat)}
                </time>
              </div>
            </li>))}
        </ul>}

      <ReviewForm/>
    </section>
  );
}

export default Reviews;
