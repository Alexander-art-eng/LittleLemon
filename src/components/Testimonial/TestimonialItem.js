const TestimonialItem = ({name, image, rating, review}) => {

    return (
        <div className="testimonial-item" aria-labelledby={ `testimonial-${name}` }>
            <h3>{ name }</h3>
            <img src={ image } alt={ `${name}'s testimonial profile` } id="testimonial-image" aria-label={ `${name}'s testimonial profile` } /><br />
            <img src={ rating } alt={ `${name}'s rating` } id="testimonial-rating" aria-label={ `${name}'s rating` }/>
            <p data-testid="review">{ review }</p>
        </div>
    );
};

export default TestimonialItem;