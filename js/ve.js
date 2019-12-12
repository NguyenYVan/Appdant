$(document).ready(function() {
  var svgWidht = $(".svg__section").width();
	var svgHeight = $(".svg__section").height();
	function VeMatCatCot() {
		var points=[];
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
		// chuyển tọa độ vào svg
		var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		return html;
	}
		$("#tietdiencot").empty();
		$("#tietdiencot").html(VeMatCatCot());
	$("#txt__section__berong").change(function () {
		$("#tietdiencot").empty();
		$("#tietdiencot").html(VeMatCatCot());
	});
	$("#txt__section__chieucao").change(function () {
		$("#tietdiencot").empty();
		$("#tietdiencot").html(VeMatCatCot());
	});
	$("#txt__section__daybung").change(function () {
		$("#tietdiencot").empty();
		$("#tietdiencot").html(VeMatCatCot());
	});
	$("#txt__section__daycanh").change(function () {
		$("#tietdiencot").empty();
		$("#tietdiencot").html(VeMatCatCot());
	});
	// --------------------------------------------------------------------
	var tableValue = [];
	// polygons của bản đế.
	function bande_matbang() {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length === 0) {
			alert('chưa có kết quả tính toán. Quay lại trang nhập liệu.');
		} else {
			for (i = 1; i <= $(".table__value").length; i++) {
				tableValue[i-1] = parseFloat( $(".table__value:nth-child(" + i + ")").text());
			}
			// point1
			points[0] =svgWidht/2 - tableValue[2]/2;
			points[1] =svgHeight/2 - tableValue[1]/2;
			// point2
			points[2] =svgWidht/2 + tableValue[2]/2;
			points[3] =svgHeight/2 - tableValue[1]/2;
			// point3
			points[4] =svgWidht/2 + tableValue[2]/2;
			points[5] =svgHeight/2 + tableValue[1]/2;
			// point4
			points[6] =svgWidht/2 - tableValue[2]/2;
			points[7] =svgHeight/2 + tableValue[1]/2;
			// point5
			points[8] =svgWidht/2 - tableValue[2]/2;
			points[9] =svgHeight/2 - tableValue[1]/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// polygons của bản đế.
	function damde_matbang() {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =svgWidht/2 - tableValue[5]/2 ;
			points[1] =svgHeight/2 - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point2
			points[2] =svgWidht/2 - tableValue[5]/2 ;
			points[3] =svgHeight/2 - $("#txt__section__chieucao").val()/2;
			// point3
			points[4] =svgWidht/2 + tableValue[5]/2;
			points[5] =svgHeight/2 - $("#txt__section__chieucao").val()/2;
			// point4
			points[6] =svgWidht/2 + tableValue[5]/2;
			points[7] =svgHeight/2 - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// vẽ chi tiết chân cột
	$("#btn__ve").click(function () {
		$("#vechancot").empty();
		var html = VeMatCatCot() 
							+ bande_matbang() 
							+ damde_matbang();
		$("#vechancot").html(html);
	});
});
