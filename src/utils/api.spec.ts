import getWeather from './api';


describe('Api call', () => {
    test('throws an error if theres no location', () => {

        expect(
            getWeather('', true)
        ).rejects.toThrow('Enter a city please!');

    });

    test('throws an error if the location doesnt exist', () => {

        expect(
            getWeather('asda', true)
        ).rejects.toThrow();

    });
});