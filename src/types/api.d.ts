
//consider transformer?
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

export interface IWeeklyWeather{
    daily: IDailyWeather[];
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset:number;
}


interface IDailyWeather{
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like:IDayTimes
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    sunrise: number;
    sunset: number;
    temp: ITempTimes;
    uvi: number;
    weather: IWeather[];
    wind_deg: number;
    wind_speed: number;
}


interface IDayTimes{
        day: number;
        night: number;
        eve: number;
        morn: number;
}

interface ITempTimes extends IDayTimes{
    min: string;
    max: string;
}

interface IWeather{ 
        description: string;
        icon: string;
        id: number;
        main: string;
}