		function clic(txt = " "){
	function rand(limite){
  		return Math.floor(Math.random() * limite)+1;
	}
	n = rand(15);
	n = n.toString();
	text = "Adios " + n + " "+txt;
	console.log("lo hizo");
	alert(text);
}
//para sumar o restar numeros
function agrega(quien,cuanto){
	var x = document.getElementById(quien);
	var y = parseInt(x.textContent);
	y += cuanto;
	y = Math.abs(y);
	x.textContent = y.toString();
}
//para resetear un boton 
function resetear(quien){
	var x = document.getElementById(quien);
	x.textContent = "0";
}
//regresa cuanto fue de cada producto, dependiento cuantos fueron y cual es el costo unitario
function precio(quien,cuanto){
	var	aux = document.getElementById(quien);
	return (cuanto * parseInt(aux.textContent));
}
//agrega los botones
function botones(id,precio,full){
	var suma = id + "1";
	var resta = id + "2";
	document.getElementById(suma).addEventListener("click",function(){
		agrega(id,1);
		orden();

		//console.log(get_order());
		//cuentas();
	},false);
	document.getElementById(resta).addEventListener("click",function(){
		agrega(id,-1);
		orden();

		//console.log(get_order());
		//cuentas();
	},false);
	/*
	if(full){
		suma = id + "4";
		resta = document.getElementById(suma);
		resta.textContent = " ($" + precio.toString() + ")";
	}
	*/
}
function get_order(){
	var aux = document.getElementById("base");
	var aux2 = aux.textContent.split("\n");
	return aux2;
}
function base_datos(){
	var dat = get_order();
	var id,cantidad,parte;
	var i;
	for(i=1;i<dat.length;i++){
		parte = dat[i].split(" ");
		id = parte[0];
		cantidad = parte[1];
		console.log("ID: ",id," Cantidad: ",cantidad);


		//aqui va a mandar a la la base de datos la instruccion de agregar la cantidad a el id
		//primero " viejo = select venta_dia from ventas where id = '$id'  //es la variable id"
		//luego "nuevo = vuejo + cantidad"
		//y por ultimo "update ventas set venta_dia = $nuevo where id = '$id' "


	}

	text = "Usted ordeno: \n"+document.getElementById("Orden").textContent;
	alert(text);


	for(i = 0; i < ids.length; i++){
		resetear(ids[i][0]);
		//resetear(ids[i][0]+"3");
	}
	orden();
}
function orden(){
	var i;
	var pedido = "";
	var base = "";
	for(i=0;i<nombres.length;i++){
		var aux = document.getElementById(nombres[i].id);
		if(aux.textContent != "0" && aux.textContent != " 0"){
			var linea = nombres[i].name + " x"+aux.textContent+"\n";
			var idn = nombres[i].id;
			switch(nombres[i].id){
				case "AM":
					idn = "AA";
					break;
				case "AT":
					idn = "AA";
					break;
				case "AB":
					idn = "AA";
					break;
				case "CM":
					idn = "CA";
					break;
				case "CT":
					idn = "CA";
					break;
				case "CB":
					idn = "CA";
					break;
			}
			var linea2 = "\n"+idn+" "+aux.textContent;
			base = base + linea2;
			pedido = pedido+linea;
		}
	}
	aux = document.getElementById("Orden");
	aux.textContent = pedido;
	aux = document.getElementById("base");
	aux.textContent = base;
}


var ids = [

		["HS",10],["HH",10],["HD",10],
		["AM",10],["AT",10],["AB",10],["AA",10],
		["CM",10],["CT",10],["CB",10],["CA",10],
		["SP",10],["SF",10],["SN",10],["SS",10],["SPP",10],
		["SC",10],["SPC",10],["SEL",10],["SES",10],
		//aros de cebolla, platano capeado, elotes, esquites
		["DCH",10],["DPC",10],["DP",10],["DM",10]
		//drinks michelada, piña colada, pitufo,mojito
];
const nombres = [{
	id: "HS",
	name: "Hamburguesa Sencilla"
},{
	id: "HH",
	name: "Hamburguesa Hawallana"
},{
	id: "HD",
	name: "Hamburguesa Doble"
},{
	//alitas
	id: "AM",
	name: "Alitas Mango-Abanero"
},{
	id: "AT",
	name: "Alitas Tamarindo-Morita"
},{
	id: "AB",
	name: "Alitas BBQ"
},{
	id: "AA",
	name: "Alitas Adobadas"
},{
	//costillas
	id: "CM",
	name: "Costillas Mango-Abanero"
},{
	id: "CT",
	name: "Costillas Tamarindo-Morita"
},{
	id: "CB",
	name: "Costillas BBQ"
},{
	id: "CA",
	name: "Costillas Adobadas"
},{
	//snacks
	id: "SP",
	name: "Platanos Fritos"
},{
	id: "SF",
	name: "Papas a la Francesa"
},{
	id: "SN",
	name: "Nuggets"
},{
	id: "SS",
	name: "Salchipulpos"
},{
	id: "SPP",
	name: "Palomitas de Pollo"
},{
	id: "SC",
	name: "Aros de Cebolla"
},{
	id: "SPC",
	name: "Platano Capeado"
},{
	id: "SEL",
	name: "Elotes"
},{
	id: "SES",
	name: "Esquites"
},{
	id: "DCH",
	name: "Michelada"
},{
	id: "DPC",
	name: "Piñacolada"
},{
	id: "DP",
	name: "Pitufo"
},{
	id: "DM",
	name: "Mojito"
}];	


/*
function cuentas(){
	var total = 0;
	var aux = "null";
	var t = 0;
	var i = 0;
	t = document.getElementById("extra").value;
	//document.getElementById("num").textContent = typeof(t) + "\"" + t.toString() + "\"";
	if(t.toString() == ""){t = 0;}
	total += Math.abs(parseInt(t));
	for(i = 0; i < ids.length; i++){
		//total += precio(ids[i],cst[i]);
		t = precio(ids[i][0],ids[i][1]);
		total += t;
		aux = ids[i][0] + "3";
		aux = document.getElementById(aux);
		aux.textContent = "\" $" + t.toString() + "\"";
	}
	for(i=0; i<cinco.length; i++){
		aux = "c" + cinco[i];
		t = precio(aux,5);
		total += t;
	}
	for(i=0; i<ten.length;i++){
		aux = "c" + ten[i];
		t = precio(aux,10);
		total += t;
	}
	for(i=0;i<mas.length;i++){
		aux = "c" + mas[i][0];
		t = precio(aux,mas[i][1]);
		total += t;
	}


	aux = document.getElementById("cuenta");
	aux.textContent = total.toString();

	aux = document.getElementById("cD");
	if(aux.textContent == "0"){
		document.getElementById("dulces").style.visibility = "collapse";
	}else{
		document.getElementById("dulces").style.visibility = "visible";
	}
	aux = document.getElementById("cs");
	if(aux.textContent == "0"){
		document.getElementById("salado").style.visibility = "collapse";
	}else{
		document.getElementById("salado").style.visibility = "visible";
	}
}
*/
//funcion de extras
//document.getElementById("extra").addEventListener("change",cuentas);
//funcion de resetear
document.getElementById("make").addEventListener("click",base_datos,false);
document.getElementById("res").addEventListener("click",function(){
	var i = 0;
	//var name = "";
	/*
	document.getElementById("extra").value = 0;
	document.getElementById("dulces").style.visibility = "collapse";
	document.getElementById("salado").style.visibility = "collapse";
	resetear("cuenta");
	*/

	for(i = 0; i < ids.length; i++){
		resetear(ids[i][0]);
		//resetear(ids[i][0]+"3");
	}
	orden();
	/*
	for(i = 0; i < ten.length; i++){
		name = "c" + ten[i];
		resetear(name);
	}

	for(i = 0; i < mas.length; i++){
		name = "c"+ mas[i][0];
		resetear(name);
	}
	for(i = 0; i < cinco.length; i++){
		name = "c" + cinco[i];
		resetear(name);
	}
	*/
},false);

var name = "";
var i = 0;
//agregar todos los botones

/*
for(i = 0; i < ten.length; i++){
	name = "c" + ten[i];
	botones(name,10,false);
}

for(i = 0; i < mas.length; i++){
	name = "c"+ mas[i][0];
	botones(name,mas[i][1],false);
}
for(i = 0; i < cinco.length; i++){
	name = "c" + cinco[i];
	botones(name,5,false);
}
*/
for(i = 0; i < ids.length; i++){
	botones(ids[i][0],ids[i][1],true);
}


