import { apiTransformer, tempUnit } from '../transformer';
import { CITYAPIRESPONSE, APIRESPONSE } from '../__mocks__/mockApiResponse';

const transformedMock = apiTransformer(APIRESPONSE, CITYAPIRESPONSE, true);

describe('transformWeatherForFE', () => {
    test('transforms the weather correctly', () => {

        expect(transformedMock).toMatchObject([{
            day: {
                month: 'July',
                numeric: 20,
                weekday: 'Monday'
            },
            isCelcius: true,
            weather: {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
            },
        }]);
        expect(transformedMock).toHaveLength(1);
    });

    test('transforms the weather for Fahrenheit', () => {
        const fahrenheitMock = apiTransformer(APIRESPONSE, CITYAPIRESPONSE, false);
        expect(fahrenheitMock).toMatchObject([{
            day: {
                month: 'July',
                numeric: 20,
                weekday: 'Monday'
            },
            isCelcius: false,
            weather: {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
            },
        }]);
        expect(transformedMock).toHaveLength(1);
    });
});

describe('TempUnit conversion', ()=>{
    test('tempUnit returns correct unit', ()=>{
        expect(tempUnit(transformedMock[0])).toMatch('C');
    });
});