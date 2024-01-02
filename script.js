const getWeather = async (city) => {
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	cityName.innerHTML = city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '4572e89a6dmsh4ed8f37544c1f9bp10de7fjsn6c2ab3a326e3',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();

		console.log(data);

		// Assuming the response structure has properties like cloud_pct, temp, feels_like, etc.
		cloud_pct.innerHTML = data.cloud_pct;
		//   temp.innerHTML = data.temp;
		temp2.innerHTML = data.temp;
		feels_like.innerHTML = data.feels_like;
		humidity.innerHTML = data.humidity;
		humidity2.innerHTML = data.humidity;
		min_temp.innerHTML = data.min_temp;
		max_temp.innerHTML = data.max_temp;
		wind_speed.innerHTML = data.wind_speed;
		wind_speed2.innerHTML = data.wind_speed;
		wind_degrees.innerHTML = data.wind_degrees;
		sunrise.innerHTML = data.sunrise;
		sunset.innerHTML = data.sunset;

	} catch (error) {
		console.error(error);
	}
};

// Assuming you have a button with the id 'submit' and an input with the id 'city'
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
	e.preventDefault();
	const cityInput = document.getElementById('city');
	getWeather(cityInput.value);
});

// Initial call
getWeather("Mumbai");
