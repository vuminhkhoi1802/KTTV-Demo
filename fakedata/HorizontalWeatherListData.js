/*
Mr VU MINH KHOI
Horizontal FlatList input data
*/


var horizontalStatus = {
    rainy: {
        ios: "ios-rainy",
        android: "md-rainy"
    },
    cloudy: {
        ios: "ios-cloudy",
        android: "md-cloudy"
    },
    thunderstorm: {
        ios: "ios-thunderstorm",
        android: "md-thunderstorm"
    },
    sunny: {
        ios: "ios-sunny",
        android: "md-sunny"
    }
};


var currentWeatherData = [
    {
        id: '1',
        place: 'Hà Nội',
        status: horizontalStatus.sunny,
        degrees: 25,
        weather: 'Nắng',
        humidity: 65,
    },
];

var horizontalFlatListData = [
    {
        id: '1',
        day: 'Thứ Hai',
        status: horizontalStatus.rainy,
        degrees: 18,
        weather: 'Mưa'
    },
    {
        id: '2',
        day: 'Thứ Ba',
        status: horizontalStatus.cloud,
        degrees: 20,
        weather: 'Mây mù'
    },
    {
        id: '3',
        day: 'Thứ Tư',
        status: horizontalStatus.cloud,
        degrees: 21,
        weather: 'Mây mù'
    },
    {
        id: '4',
        day: 'Thứ Năm',
        status: horizontalStatus.thunderstorm,
        degrees: 19,
        weather: 'Sấm sét'
    },
    {
        id: '5',
        day: 'Thứ Sáu',
        status: horizontalStatus.sunny,
        degrees: 26,
        weather: 'Nắng'
    },
    {
        id: '6',
        day: 'Thứ Bảy',
        status: horizontalStatus.cloud,
        degrees: 23,
        weather: 'Mây mù'
    },
    {
        id: '7',
        day: 'Chủ Nhật',
        status: horizontalStatus.thunderstorm,
        degrees: 22,
        weather: 'Sấm sét'
    },
    {
        id: '8',
        day: 'Thứ Hai',
        status: horizontalStatus.cloud,
        degrees: 22,
        weather: 'Mây mù'
    },
    {
        id: '9',
        day: 'Thứ Ba',
        status: horizontalStatus.sunny,
        degrees: 28,
        weather: 'Nắng'
    },
    {
        id: '10',
        day: 'Thứ Tư',
        status: horizontalStatus.sunny,
        degrees: 29,
        weather: 'Nắng'
    }
];

export { horizontalStatus };
export { horizontalFlatListData };
export { currentWeatherData };