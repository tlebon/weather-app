import { apiTransformer } from './transformer';
import APIRESPONSE from './mocks/mockApiResponse';

describe('transformWeatherForFE', () => {
    test('transforms the weather correctly', () => {
        const current = APIRESPONSE.daily[0].weather[0];
        const transformedMock = apiTransformer(APIRESPONSE, current, 'metric');

        expect(transformedMock).toMatchObject([{
            day: {
                month: 'July',
                numeric: 20,
                weekday: 'Monday'
            },
            isCelcius: true,
            weather: {
                'id': 803,
                'main': 'Clouds',
                'description': 'broken clouds',
                'icon': '04d'
            }
        }]);

    });
});