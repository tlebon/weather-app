export const APIRESPONSE = {
    'lat': 33.44,
    'lon': -94.04,
    'timezone': 'America/Chicago',
    'timezone_offset': -21600,
    'daily': [
        {
            'dt': 1595268000,
            'sunrise': 1608124431,
            'sunset': 1608160224,
            'temp': {
                'day': 278.14,
                'min': 273.15,
                'max': 279.4,
                'night': 273.15,
                'eve': 275.82,
                'morn': 275.35
            },
            'feels_like': {
                'day': 273.53,
                'night': 270.26,
                'eve': 271.89,
                'morn': 272.11
            },
            'pressure': 1021,
            'humidity': 70,
            'dew_point': 273.27,
            'wind_speed': 3.74,
            'wind_deg': 323,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04d'
                }
            ],
            'clouds': 60,
            'pop': 0.84,
            'uvi': 2.41
        },
    ],
    'alerts': [
        {
            'sender_name': 'NWS Tulsa (Eastern Oklahoma)',
            'event': 'Heat Advisory',
            'start': 1597341600,
            'end': 1597366800,
            'description': '...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible.'
        },
    ]
};

export const CITYAPIRESPONSE = {
    'coord': {
        'lon': -122.08,
        'lat': 37.39
    },
    'weather': [
        {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
        }
    ],
    'base': 'stations',
    'main': {
        'temp': 282.55,
        'feels_like': 281.86,
        'temp_min': 280.37,
        'temp_max': 284.26,
        'pressure': 1023,
        'humidity': 100
    },
    'visibility': 16093,
    'wind': {
        'speed': 1.5,
        'deg': 350
    },
    'clouds': {
        'all': 1
    },
    'dt': 1560350645,
    'sys': {
        'type': 1,
        'id': 5122,
        'message': 0.0139,
        'country': 'US',
        'sunrise': 1560343627,
        'sunset': 1560396563
    },
    'timezone': -25200,
    'id': 420006353,
    'name': 'Mountain View',
    'cod': 200
};



