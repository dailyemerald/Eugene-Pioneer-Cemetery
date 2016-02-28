function changemap(number, length){

	var array;
	var map;

	if(length == 7) {
		array = ["map1","map2","map3","map4","map5","map6","map7"];
		map=String(array[number]);
		$("#map0").css("display","none");
		$("#"+map).css("display", "block");
		$("#"+map).css("z-index", "1");
	}
	else {
		array = ["mobile1","mobile2","mobile3","mobile4","mobile5","mobile6"];
		map= String(array[number]);
		$("#mobile0").css("display","none");
		$("#"+map).css("display", "block");
		$("#"+map).css("z-index", "1");
	}

	var i;
	for(i=0;i<length;i++){

			if(i != number){
			$("#"+String(array[i])).css("display", "none");
			$("#"+String(array[i])).css("z-index", "0");

		}
	}

}

