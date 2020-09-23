const Url = 'http://localhost:8080/cinemas/';
apiclient = (function () {
    var f=[]
    return {
        getFunctionsByCinema: function (name, callback) {
                $.get(Url+name,function(data){
                    f=data;
                });
                return callback(f)
        }
		getFunctionsByCinemaAndDate: function (name,date, callback) {
                $.get(Url+name+date,function(data){
                    g=data;
                });
                return callback(g)
        }
		
    };
})();