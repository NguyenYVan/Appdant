$(document).ready(function () {
	// đặc điểm cơ lí của thép
	if($("#cbb__select__steel").val() === "cct34") {
		$("#txt__steel__cuongdott").val("2000");
	}
	$(".select__item").click(function () { 
		if($(this).text() === "cct34") {
			$("#txt__steel__cuongdott").val("2000");
		} else if ($(this).text() === "cct38") {
			$("#txt__steel__cuongdott").val("2200");
		} else if ($(this).text() === "cct42") {
			$("#txt__steel__cuongdott").val("2400");
		}
	});
	// đặc điểm cơ lí của bê tông
	if($("#cbb__select__concrete").val() === "b15") {
		$("#txt__concrete__rb").val("85");
		$("#txt__concrete__rbt").val("7.5");
	}
	$(".select__item").click(function () { 
		if($(this).text() === "b15") {
			$("#txt__concrete__rb").val("85");
		$("#txt__concrete__rbt").val("7.5");
		} else if ($(this).text() === "b20") {
			$("#txt__concrete__rb").val("115");
			$("#txt__concrete__rbt").val("9");
		} else if ($(this).text() === "b25") {
			$("#txt__concrete__rb").val("145");
			$("#txt__concrete__rbt").val("10.5");
		}
	});
	// đặc điểm cơ lý của bu lông
	if($("#cbb__select__bold").val() === "ct38") {
		$("#txt__bold__cuongdochiukeo").val("1500");
	}
	$(".select__item").click(function () { 
		if($(this).text() === "ct38") {
			$("#txt__bold__cuongdochiukeo").val("1500");
		} else if ($(this).text() === "16mnsi") {
			$("#txt__bold__cuongdochiukeo").val("1900");
		} else if ($(this).text() === "09mn2si") {
			$("#txt__bold__cuongdochiukeo").val("1850");
		}
	});
	// đặc điểm cơ lý của đường hàn
	if($("#cbb__select__weld").val() === "n42") {
		$("#txt__weld__cuongdott").val("1800");
	}
	$(".select__item").click(function () { 
		if($(this).text() === "n42") {
			$("#txt__weld__cuongdott").val("1800");
		} else if ($(this).text() === "n46") {
			$("#txt__weld__cuongdott").val("2000");
		} else if ($(this).text() === "n50") {
			$("#txt__weld__cuongdott").val("2150");
		}
	});
});
