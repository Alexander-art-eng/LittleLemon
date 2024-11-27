const TestimonialItem = ({name, image, rating, review}) => {

    return (
        <div className="testimonial-item">
            <h3>{ name }</h3>
            <img src={ image } alt={ `${name}'s testimonial profile` } id="testimonial-image"  /><br />
            <img src={ rating } alt={ `${name}'s rating` } id="testimonial-rating"/>
            <p>{ review }</p>
        </div>
    );
};

export default TestimonialItem;