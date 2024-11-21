import React, { useState } from "react";

const BookingForm = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* for date field*/}
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input type="date" id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} name="book-date" required/>
                        </div>

                        {/* for time field*/}
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} >
                                <option value="">Select Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key=
                                    {availableTimes}>{ availableTimes }</option>})
                                }
                            </select>
                        </div>

                        {/* for guest field*/}
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input type="number" id="book-guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        {/* for occasion field*/}
                        <div>
                            <label htmlFor="book-occasion">Occasion:</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Engegament</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        {/* submit button */}
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"} />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;