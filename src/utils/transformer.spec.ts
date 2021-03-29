import { apiTransformer } from './transformer';
import APIRESPONSE from './mocks/mockApiResponse';

describe('transformWeatherForFE', () => {
	test('transforms the weather correctly', () => {

		const transformedMock = apiTransformer(APIRESPONSE);

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