export interface ILocationWeather {
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number; lat: number };
    dt: number;
    id: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    name: string;
    sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }
    timezone: number;
    visibility: number;
    weather: IWeather[]
    wind: {
        speed: number;
        deg: number;
    }
}

export interface IWeeklyWeatherResponse {
    daily: IDailyWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    alerts?:{
        sender_name:string;
        event:string;
        start:number;
        end:number;
        description:string;
    }[]
}


interface IDailyWeather {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: IDayTimeTemps
    humidity: number;
    pop: number;
    pressure: number;
    rain?: number;
    sunrise: number;
    sunset: number;
    temp: IDailyTemps;
    uvi: number;
    weather: IWeather[];
    wind_deg: number;
    wind_speed: number;
}

export interface IDailyTransWeather {
    day: {
        numeric: number;
        month: string;
        weekday: string;
    };
    sunrise: string;
    sunset: string;
    high: number;
    low: number;
    current?: number;
    isCelcius: boolean;
    weather: IWeather;
}

interface IDayTimeTemps {
    day: number;
    night: number;
    eve: number;
    morn: number;
}

interface IDailyTemps extends IDayTimeTemps {
    min: number;
    max: number;
}

interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}