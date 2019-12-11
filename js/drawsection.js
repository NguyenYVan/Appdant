$(document).ready(function () {
	var points=[];
  var svgWidht = $("#mysvg").width();
	var svgHeight = $("#mysvg").height();
	function drawSection() {
		// point1
		points[0] =svgWidht/2 - $("#txt__section__berong").val()/2;
		points[1] =svgHeight/2 - $("#txt__section__chieucao").val()/2;
		// point2
		points[2] =svgWidht/2 + $("#txt__section__berong").val()/2;
		points[3] =svgHeight/2 - $("#txt__section__chieucao").val()/2;
		// point3
		points[4] =svgWidht/2 + $("#txt__section__berong").val()/2;
		points[5] =svgHeight/2 - $("#txt__section__chieucao").val()/2 + parseFloat($("#txt__section__daycanh").val());
		// point4
		points[6] =svgWidht/2 + parseFloat($("#txt__section__daybung").val())/2;
		points[7] =svgHeight/2 - $("#txt__section__chieucao").val()/2 + parseFloat($("#txt__section__daycanh").val());
		// point5
		points[8] =svgWidht/2 + parseFloat($("#txt__section__daybung").val())/2;
		points[9] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point6
		points[10] =svgWidht/2 + $("#txt__section__berong").val()/2;
		points[11] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point7
		points[12] =svgWidht/2 + $("#txt__section__berong").val()/2;
		points[13] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2);
		// point8
		points[14] =svgWidht/2 - $("#txt__section__berong").val()/2;
		points[15] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2);
		// point9
		points[16] =svgWidht/2 - $("#txt__section__berong").val()/2;
		points[17] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2)- parseFloat($("#txt__section__daycanh").val());
		// point10
		points[18] =svgWidht/2 - parseFloat($("#txt__section__daybung").val())/2;
		points[19] =svgHeight/2 + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point11
		points[20] =svgWidht/2 - parseFloat($("#txt__section__daybung").val())/2;
		points[21] =svgHeight/2 - parseFloat($("#txt__section__chieucao").val()/2) + parseFloat($("#txt__section__daycanh").val());
		// point12
		points[22] =svgWidht/2 - parseFloat($("#txt__section__berong").val())/2;
		points[23] =svgHeight/2 - parseFloat($("#txt__section__chieucao").val()/2) + parseFloat($("#txt__section__daycanh").val());
		// point13
		points[24] =svgWidht/2 - $("#txt__section__berong").val()/2;
		points[25] =svgHeight/2 - $("#txt__section__chieucao").val()/2;
		// --------------------------------------------------------------------
		var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		$("#mysvg").empty();
		$("#mysvg").html(html);
	}
	drawSection();
	$("#txt__section__berong").change(function () {
		drawSection();
	});
	$("#txt__section__chieucao").change(function () {
		drawSection();
	});
	$("#txt__section__daybung").change(function () {
		drawSection();
	});
	$("#txt__section__daycanh").change(function () {
		drawSection();
	});
});
