var app = (function () {
	var _cineSeleccionado;
	
	var _fechaSeleccionada;
	
	var _listaFunciones = [];
	
	var cambiarNombreCinema = function (){
		_cineSeleccionado = nuevoNombre;
	};
	
	var cambiarFecha = function (){
		_fechaSeleccionada = nuevaFecha;
	};
	
	/*
	function getFunctionsByCinema(){
		_cineSeleccionado = $("#input").val();
		listaFunciones;
		apimock.getFunctionsByCinema(_cineSeleccionado, function(funcion){
			listaFunciones = funcion.functions;
		});
		for(int i=0; i<listaFunciones.length; i++){
			movieName = listaFunciones[i].movie.name;
            gender = listaFunciones[i].movie.genre;
            hour = listaFunciones[i].date.substring(11, 16);
			disponibilidad = isDisponible(listaFunciones[i].seats);
			var row = '<tr><td>' + movieName + '</td><td>' + gender + '</td><td>' + hour + '</td><td>' + disponibilidad +'</tr>';
			$("#table").append(row);
		}
		
		
		
	}
	*/
	
	function getFunctionsByCinemaAndDate() {
          _cineSeleccionado = $("#input").val();
          _fechaSeleccionada = $("#date").val();
          apimock.getFunctionsByCinemaAndDate(_cineSeleccionado, _fechaSeleccionada, convertElementsToObject);
      }
	
	
	function convertElementsToObject(functions) {
		$("table").find("tr:gt(0)").remove();
		$("#cinemaSeleccionado").text(_cineSeleccionado);
        var mapFunctions = functions.map(
          function (f) {
              f.movie.name;
              f.movie.genre;
              f.date.substring(11, 16);
			  f.seats;
			 
          });
		  for(var i=0; i<functions.length; i++){
			console.log(functions[i])
			movieName = functions[i].movie.name;
            gender = functions[i].movie.genre;
            hour = functions[i].date.substring(11, 16);
			disponibilidad = isDisponible(functions[i].seats);
			var row = '<tr><td>' + movieName + '</td><td>' + gender + '</td><td>' + hour + '</td><td>' + true +'</tr>';
			$("#table").append(row);
		}
		  

      }
	  
	function isDisponible(alist){
		var n = false;
		for(i = 0; i < alist.length; i++){
			n = n || alist[i].includes(true);
		}		
		return n;
	}		
	
	
	function updateTable(mapFunctions) {

          $("#cinemaSeleccionado").text(_cineSeleccionado);
          mapFunctions.map(function (film) {
              var row = '<tr><td>' + film.movieName + '</td><td>' + film.gender + '</td><td>' + film.hour + '</td><td>' + boton +'</tr>';
              $("#table").append(row);
          })
		  
		 
      }
	  
	
	return {
		cambiarNombreCinema: cambiarNombreCinema,
		cambiarFecha: cambiarFecha,
		getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate
	};
})();