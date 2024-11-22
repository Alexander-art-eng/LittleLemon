import { initializeTimes, updateTimes } from "../Main";

describe("Main Component Reducer Tests", () => {
    test('initializeTimes returns the correct initial state', () => {
        // Arrange & Act
        const initialState = initializeTimes();

        // Assert
        expect(initialState).toHaveProperty('availableTimes');
        expect(Array.isArray(initialState.availableTimes)).toBe(true);
    });

    test('updateTimes returns the correct times when date is changed', () => {
        // Arrange
        const state = {
            availableTimes: ['17:00', '18:00', '19:00']
        };
        const action = { date: '2024-03-20' };

        // Act
        const newState = updateTimes(state, action);

        // Assert
        expect(newState).toHaveProperty('availableTimes');
        expect(Array.isArray(newState.availableTimes)).toBe(true);
    });
});
