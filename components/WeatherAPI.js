import React from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';


export default class WeatherAPI extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: null,
            errorMessage: null,
            latitude: 0,
            longitude: 0,
            forecast: [],
            error: ''
        };
    }
    
    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this.getLocation();
        }
    }


    componentDidMount() {
        // Get the user's location
        this.getLocation();
    }

    getLocation() {
        let (status) = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage:'Permission to access location was denied',
            });
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({location});



        // Get the current position of the user
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    (prevState) => ({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }), () => { this.getWeather(); }
                );
            },
            (error) => this.setState({ forecast: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    getWeather() {

        // Construct the API url to call
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.state.latitude + '&lon=' + this.state.longitude + '&units=metric&appid=2c5e028d2818a587306eb59bd66827cf';

        // Call the API, and set the state of the weather forecast
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState((prevState, props) => ({
                    forecast: data
                }));
            })
    }

}