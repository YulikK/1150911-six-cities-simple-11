type RatingProps = {
  rating: number;
  className: string;
}

function getRatingNumberToPrc(rating: number): string {
  const STAR_COUNT = 5;
  const SCALE_MAX = 100;
  const ratingWidth = Math.round(SCALE_MAX / STAR_COUNT * rating);
  return `${ratingWidth}%`;
}

function Rating({rating, className}:RatingProps): JSX.Element {
  const ratingToPct = getRatingNumberToPrc(rating);

  return(
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: ratingToPct }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {className === 'property' &&
        <span className="property__rating-value rating__value">{rating}</span>}
    </div>
  );
}

export default Rating;
