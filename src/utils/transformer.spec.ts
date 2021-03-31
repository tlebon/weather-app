import { apiTransformer } from './transformer';
import { CITYAPIRESPONSE, APIRESPONSE } from './mocks/mockApiResponse';

describe('transformWeatherForFE', () => {
    test('transforms the weather correctly', () => {
        const current = CITYAPIRESPONSE;
        const transformedMock = apiTransformer(APIRESPONSE, current, true);

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