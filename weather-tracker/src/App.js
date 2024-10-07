import { Oval } from 'react-loader-spinner';//Displays a spinner while the API call is being made
import React, { useState } from 'react';//import the hooks function "usestate"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//import a library for adding icons
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function GfGWeatherApp() {
	const [input, setInput] = useState(''); //define the variable of const type
	const [weather, setWeather] = useState({
		loading: false, //indicate the app is loadng data from api
		data: {},//holds the weather data retrieved from the API
		error: false,
	});

	const toDateFunction = () => { //utility function to format the months
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];
		const WeekDays = [ //utility function to format the months
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
		const currentDate = new Date();
		const date = `${WeekDays[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
			}`;
		return date;
	};

	const search = async (event) => {//it uses to search when thw user used to input an event 
		if (event.key === 'Enter') {//event key  triggered when we prase the enter key
			event.preventDefault();
			setInput('');
			setWeather({ ...weather, loading: true });
			const url = 'https://api.openweathermap.org/data/2.5/weather';//define the map 
			const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
			await axios
				.get(url, {
					params: {
						q: input,
						units: 'metric',
						appid: api_key,
					},
				})
				.then((res) => {// if the weather of the place is found then the res function will work 
					console.log('res', res);
					setWeather({ data: res.data, loading: false, error: false });
				})
				.catch((error) => {
					setWeather({ ...weather, data: {}, error: true });
					setInput('');
					console.log('error', error);
				});
		}
	};

	return (
		<div className="App">
			<h1 className="app-name"> Weather App</h1>
			<div className="search-bar">  
				<input        //display where we used to enter the city name
					type="text"
					className="city-search"
					placeholder="Enter City Name.."
					name="query"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					onKeyPress={search}
				/>
			</div>
			{weather.loading && ( //it display when the data process throug API
				<>
					<br />
					<br />
					<Oval type="Oval" color="black" height={100} width={100} />
				</>
			)}
			{weather.error && (
				<>
					<br />
					<br />
					<span className="error-message">
						<FontAwesomeIcon icon={faFrown} />
						<span style={{ fontSize: '20px' }}>City not found</span>
					</span>
				</>
			)}
			{weather && weather.data && weather.data.main && (
				<div>
					<div className="city-name">
						<h2>
							{weather.data.name}, <span>{weather.data.sys.country}</span>
						</h2>
					</div>
					<div className="date">
						<span>{toDateFunction()}</span>
					</div>
					<div className="icon-temp"> 
						<img
							className=""
							src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
							alt={weather.data.weather[0].description}
						/>
						{Math.round(weather.data.main.temp)}
						<sup className="deg">°C</sup>
					</div>
					<div className="des-wind">
						<p>{weather.data.weather[0].description.toUpperCase()}</p>
						<p>Wind Speed: {weather.data.wind.speed}m/s</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default GfGWeatherApp;