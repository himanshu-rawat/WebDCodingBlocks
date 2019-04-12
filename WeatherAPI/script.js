(function() {
	btn.onclick = function() {
		let input = document.getElementById('inp');
		let btn = document.getElementById('btn');
		let myKey = 'c0ddab59f23c21756b3b28c91e2d36e7';
		let val = input.value;
		function newtworkRequest() {
			let weather =
				'https://api.openweathermap.org/data/2.5/weather?q=' + val + '&units=metric' + '&appid=' + myKey;

			fetch(weather).then(function(data) {
				if (data.status !== 200) {
					return;
				}
				data.json().then(function(d) {
					//console.log(d);
					display(d);
				});
			});
		}

		function display(inf) {
			let details = inf;
			console.log(details);
			console.log('City Name: ' + details.name);
			console.log('Country Name: ' + details.sys.country);
			console.log('Temperature Right Now in Celcius: ' + details.main.temp);

			// let p = document.createElement('p');
			// let data = document.createTextNode(inf);
			// p.appendChild(data);
			// document.body.appendChild(p);
		}
		newtworkRequest();
	};
})();
