api = (function () {
	const Url = 'http://localhost:8080/cinemas/';
    return {
        getFunctionsByCinema: function (name, callback) {
				$.getJSON("http://localhost:8080/cinemas/" + name, function (data) {
					callback(data);
				});
                
        },
		getFunctionsByCinemaAndDate: function (name, date, callback) {
				$.getJSON("http://localhost:8080/cinemas/" + name +"/"+ date, function (data) {
					callback(data);
				});
        }
    };
})();