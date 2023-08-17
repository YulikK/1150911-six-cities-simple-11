type FormStarsProps = {
  setStars: (value: number) => void;
}

function FormStars({setStars}: FormStarsProps):JSX.Element{
  const starElements: number[] = [5, 4, 3, 2, 1];
  return(
    <div className="reviews__rating-form form__rating">
      {starElements.map((star) => (
        <div key={star} className="reviews__rating-wraper">
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            defaultValue={star}
            id={`${star}-stars`}
            type="radio"
            onClick={(e) => setStars(star)}
          />
          <label
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>))}
    </div>
  );
}

export default FormStars;
