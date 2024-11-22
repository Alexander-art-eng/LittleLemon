import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "../BookingPage/BookingPage";
import { useReducer } from "react";
import ConfirmBooking from "../ConfirmBooking";
import Header from "../Header";

export const seedRandom = function(seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function() {
        return (s = s * a % m) / m;
    }
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() > 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
}

export const submitAPI = function(formData) {
    return true;
}

export const initializeTimes = () => {
    return {
        availableTimes: fetchAPI(new Date())
    };
};

export const updateTimes = (state, action) => {
    return {
        availableTimes: fetchAPI(new Date(action.date))
    };
};

const Main = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();
    function submitForm (formData) {
        if(submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ConfirmBooking />} />
            </Routes>
        </main>
    );
};

export default Main;