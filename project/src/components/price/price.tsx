type PriceProps = {
  price: number;
  isShort: boolean;
}
function Price({price, isShort}: PriceProps): JSX.Element{
  const className = isShort ? 'place-card' : 'property__price';

  return(
    <div className={className}>
      <b className={`${className}-value`}>{`\u20AC${price}`}</b>
      <span className={`${className}-text`}>&nbsp;night</span>
    </div>
  );
}

export default Price;
