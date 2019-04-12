(function() {
	btn.onclick = function() {
		let input = document.getElementById('inp');
		let btn = document.getElementById('btn');
		let val = input.value;
		function newtworkRequest() {
			let url = 'http://numbersapi.com/' + val;
			// console.log(url);
			fetch(url).then(function(data) {
				if (data.status !== 200) {
					return;
				}
				data.text().then(function(d) {
					display(d);
				});
			});
		}

		function display(inf) {
			let p = document.createElement('p');
			let data = document.createTextNode(inf);
			p.appendChild(data);
			document.body.prepend(p);
		}
		newtworkRequest();
	};
})();
