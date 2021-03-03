
function probarEjercicio()
{

	let nombre;
	let carrera;
	let estado;
	let sexo;
	let edad;
	let nota;
	let seguir;
	let contProgra = 0;
	let contPsico = 0;
	let contDise = 0;
	let contMujerProgra = 0;
	let contNoBinario = 0;
	let acumNotasFin = 0;
	let contFinaliza = 0;
	let promedioNotasFin = 0;
	let psicoMax = 0;
	let psicoMaxNombre;
	let psicoMaxSexo;
	let psicoMejorNbNombre;
	let psicoMejorNbEstado;
	let psicoMejorNbNota = 0;
	let maxAlumnos = 0;

	do {

		nombre = prompt("Ingrese nombre:");

		carrera = prompt("Ingrese carrera programacion/psicologia/diseño grafico:").toLowerCase();
		while (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico"){
			carrera = prompt("ERROR!! Ingrese carrera programacion/psicología/diseño gráfico:").toLowerCase();
		}
	
		estado = prompt("Ingrese estado: en curso/abandonado/finalizado").toLowerCase();
		while (estado != "en curso" && estado != "abandonado" && estado != "finalizado"){
			estado = prompt("ERROR!! Ingrese estado en curso/abandonado/finalizado:").toLowerCase();
		}

		sexo = prompt("Ingrese sexo f/m/nb:").toLowerCase();
		while (sexo != "f" && sexo != "m" && sexo != "nb"){
			sexo = prompt("ERROR!! Ingrese sexo f/m/nb:").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad:"));
		while (isNaN(edad) || edad <18){
			edad = prompt("ERROR!! Ingrese edad:");
		}

		nota = parseInt(prompt("Ingrese nota (entre 1 y 10):"));
		while (isNaN(nota) || nota <1 || nota > 10){
			nota = prompt("ERROR!! Ingrese nota: (entre 1 y 10)");
		}

		// console.log(nombre);
		// console.log(carrera);
		// console.log(estado);
		// console.log(sexo);
		// console.log(edad);
		// console.log(nota);

		switch(carrera){
			case "programacion":
				contProgra = contProgra + 1;

				if (sexo == 'f' && estado == "en curso"){
					contMujerProgra++;
				}

				break;
			case "psicologia":
				contPsico = contPsico + 1;

				if (edad > psicoMax){
					psicoMaxNombre = nombre;
					psicoMaxSexo = sexo;
					psicoMax = edad;
				}

				if (sexo == 'nb' && nota > psicoMejorNbNota){
					psicoMejorNbNombre = nombre;
					psicoMejorNbNota = nota;
					psicoMejorNbEstado = estado;
				}
				
				break;
			case "diseño grafico":
				contDise = contDise + 1;
				break;
		}

		if (sexo == 'nb'){
			contNoBinario++;
		}

		if (estado == 'finalizado'){
			contFinaliza++;
			acumNotasFin += nota;
		}





		seguir = prompt("¿Quiere ingresar un nuevo alumno?")

	} while (seguir == 's');

	if(contFinaliza > 0){
	promedioNotasFin = acumNotasFin/contFinaliza;
	}

	if (contProgra > contPsico && contProgra > contDise){
		maxAlumnos = "Programación";
	} else if (contPsico >= contProgra && contPsico > contDise){
		maxAlumnos = "Psicología";
	} else {
		maxAlumnos = "Diseño Gráfico";
	}

	// console.log(contProgra);
	// console.log(contPsico);
	// console.log(contDise);
	// console.log(contMujerProgra);
	// console.log(contNoBinario);
	// console.log(contFinaliza);
	// console.log(acumNotasFin);
	// console.log(promedioNotasFin);
	// console.log(psicoMaxNombre);
	// console.log(psicoMaxSexo);
	// console.log(psicoMax);
	// console.log(psicoMejorNbNombre);
	// console.log(psicoMejorNbNota);
	// console.log(psicoMejorNbEstado);
	// console.log(maxAlumnos);

	document.write("A. Cantidad total de alumnos de cada carrera. Total Programación: " + contProgra + ". Total Psicología: " + contPsico + ". Total Diseño Gráfico: " + contDise + "<br>");

	document.write("B. Cantidad total de mujeres que cursan la carrera de programación:" + contMujerProgra + "<br>");

	document.write("C. Cantidad de alumnos no binarios: " + contNoBinario + "<br>");

	document.write("D. Promedio de notas de los alumnos finalizantes: " + promedioNotasFin + "<br>");

	if (contPsico >0){
	document.write("E. Datos del alumno de más edad de la carrera de Psicología. Nombre: " + psicoMaxNombre + ". Sexo: " + psicoMaxSexo + ". Edad: " + psicoMax + "<br>");
	} else {
		document.write("E. Datos del alumno de más edad de la carrera de Psicología: No se ingresaron alumnos de Psicología. <br>")
	}

	if(!(contNoBinario > 0 && contPsico > 0)){
		document.write("E. Datos del alumno de más edad de la carrera de Psicología: No se ingresaron alumnos de sexo no binario en la carrera de Psicología. <br>")
	} else {
		document.write("F. Datos del mejor alumno no binario que estudia psicología. Nombre: " + psicoMejorNbNombre + ". Nota: " + psicoMejorNbNota + ". Estado: " + psicoMejorNbEstado + "<br>");
		document.write("G. Carrera con más alumnos: " + maxAlumnos);
	}


}
		