import React, { useState, useEffect } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [formValid, setFormValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            props.submitForm(e);
        }
    }

    const validateForm = () => {
        return date && time && guests >= 1 && guests <= 10 && occasion;
    }

    useEffect(() => {
        setFormValid(validateForm());
    }, [date, time, guests, occasion]);

    const handleChange = (e) => {
        setDate(e);
        const selectedDate = new Date(e);
        props.dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit} role="form">
                    <fieldset>
                        {/* for date field*/}
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input 
                                type="date" 
                                id="book-date" 
                                value={date} 
                                onChange={(e) => handleChange(e.target.value)} 
                                name="book-date"
                                min={new Date().toISOString().split('T')[0]}
                                required
                            />
                        </div>

                        {/* for time field*/}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select 
                                id="book-time" 
                                value={time} 
                                onChange={(e) => setTime(e.target.value)}
                                required
                            >
                                <option value="">Select a time</option>
                                {props.availableTimes.availableTimes.map(timeSlot => (
                                    <option key={timeSlot} value={timeSlot}>
                                        {timeSlot}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* for guest field*/}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input 
                                type="number" 
                                id="book-guests" 
                                value={guests} 
                                onChange={(e) => setGuests(e.target.value)}
                                min="1"
                                max="10"
                                required
                            />
                        </div>

                        {/* for occasion field*/}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select 
                                id="book-occasion" 
                                value={occasion} 
                                onChange={(e) => setOccasion(e.target.value)}
                                required
                            >
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className="btnReceive">
                            <input 
                                aria-label="On Click" 
                                type="submit" 
                                value={"Make Your Reservation"}
                                disabled={!formValid}
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;