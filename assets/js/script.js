	$( document ).ready(function() {
    	$("#idPlaza").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});


function validarVacios(){

	


	var x = $("#formaAltaPlaza")[0].length ; 
	var vacios = 0;
	for (var i= 0 ; i < x-2 ; i++){

		if($("#formaAltaPlaza")[0][i].value.trim() == ""){
			vacios++;
		}

	}

	if (vacios > 0) {
		return false;
	}
	else {
		return true;
	}

}



function enviarForma(){
	
	var vacios = validarVacios();
	if(vacios === true) {
		var formaPlaza = new FormData($('#formaAltaPlaza')[0]); 
		alert(formaPlaza);
		
		$.ajax({
			type: "POST",
			async:true,
			url:"../controller/altaPlaza.php",
			
			success:function(data){
				alert(data);
				var x = $("#formaAltaPlaza")[0].length;
				for(var i = 0 ; i < x-1 ; i++){
					$("#formaAltaPlaza")[0][i].value = "";
				}

			},
			error:function(request,status,error){
				alert(request.statusText);
			},
			data:formaPlaza,
			cache:false, 
			contentType:false,
			processData:false
		}
		);

	}

	else {
		alert("campos vacios");
	}

}
