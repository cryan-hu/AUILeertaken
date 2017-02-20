function berekenFunctie() {
	var totaal = 0, elem = new Array();
	for (i = 1; i < 13; i++) { 
		elem[i-1]= document.getElementById("Datum"+i);
		if (elem[i-1].value != ""){
			totaal = totaal + 5;
		}
	}
	return totaal;

}

function openDialoog(){
	totaal = berekenFunctie();
	document.getElementById("ECTSTot").textContent=totaal;
	dialog = document.getElementById("dialoog");
	dialog.style.display = "block";	
}

function closeDialoog() {
	dialog = document.getElementById("dialoog");
	dialog.style.display = "none";	
}