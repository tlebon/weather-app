import getWeather from './api';


describe('Api call', () => {

    test('Returns an transformed object if given a city', () => {

        expect(
            getWeather('Berlin', true)
        ).resolves.toHaveLength(8);

    });

    test('Returns the correct temperature unit', () => {

        expect(
            getWeather('Berlin', false)
        ).resolves.toMatchObject([{
            isCelcius: false,
        }]);
    });

    test('throws an error if theres no location', () => {

        expect(
            getWeather('', true)
        ).rejects.toThrow('Enter a city please!');

    });

    test('throws an error if the location doesnt exist', () => {

        expect(
            getWeather('asda', true)
        ).rejects.toThrow('Whoops that didnt work, try again.');

    });
});