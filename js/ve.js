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
	// polygons của bản cột.
	function banDe_matDungCot(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width;
			points[1] =height - parseFloat($("#txt__section__chieucao").val())/2;
			// point2
			points[2] =width;
			points[3] =height - parseFloat($("#txt__section__chieucao").val())/2 + parseFloat($("#txt__section__daycanh").val());
			// point3
			points[4] =width + 70;
			points[5] =height - parseFloat($("#txt__section__chieucao").val())/2 + parseFloat($("#txt__section__daycanh").val());
			// point4
			points[6] =width + 70;
			points[7] =height - parseFloat($("#txt__section__chieucao").val())/2;
			// point5
			points[8] =width;
			points[9] =height - parseFloat($("#txt__section__chieucao").val())/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// vẽ polygons break line.ketqu
	function breakLine(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width + 70;
			points[1] =height - parseFloat($("#txt__section__chieucao").val())/2 - 5;
			// point2
			points[2] =width + 70;
			points[3] =height - 5;
			// point3
			points[4] =width + 60;
			points[5] =height;
			// point4
			points[6] =width + 80;
			points[7] =height;
			// point5
			points[8] =width + 70;
			points[9] =height + 5;
			// point6
			points[10] =width + 70;
			points[11] =height + parseFloat($("#txt__section__chieucao").val())/2 + 5;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// polygons của bản đế.
	function banDe_matbang() {
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
	function banDe_matDung(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width - tableValue[3];
			points[1] =height - tableValue[1]/2;
			// point2
			points[2] =width;
			points[3] =height - tableValue[1]/2;
			// point3
			points[4] =width;
			points[5] =height + tableValue[1]/2;
			// point4
			points[6] =width - tableValue[3];
			points[7] =height + tableValue[1]/2;
			// point5
			points[8] =width - tableValue[3];
			points[9] =height - tableValue[1]/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// polygons của dầm đế.
	function damDe_matbang(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width - tableValue[5]/2 ;
			points[1] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point2
			points[2] =width - tableValue[5]/2 ;
			points[3] =height - $("#txt__section__chieucao").val()/2;
			// point3
			points[4] =width + tableValue[5]/2;
			points[5] =height - $("#txt__section__chieucao").val()/2;
			// point4
			points[6] =width + tableValue[5]/2;
			points[7] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point5
			points[8] =width - tableValue[5]/2 ;
			points[9] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
  }
  function damDe_matDung(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width;
			points[1] =height - $("#txt__section__chieucao").val()/2;
			// point2
			points[2] =width + tableValue[4];
			points[3] =height - $("#txt__section__chieucao").val()/2;
			// point3
			points[4] =width + tableValue[4];
			points[5] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point4
			points[6] =width;
			points[7] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point5
			points[8] =width;
			points[9] =height - $("#txt__section__chieucao").val()/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
  }
	// polygons của sườn ngăn bản đế.
	function suonNgan_matbang(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width - tableValue[8] - $("#txt__section__daybung").val()/2;
			points[1] =height - tableValue[9]/2;
			// point2
			points[2] =width - $("#txt__section__daybung").val()/2;
			points[3] =height - tableValue[9]/2;
			// point3
			points[4] =width - $("#txt__section__daybung").val()/2;
			points[5] =height + tableValue[9]/2;
			// point4
			points[6] =width - tableValue[8] - $("#txt__section__daybung").val()/2;
			points[7] =height + tableValue[9]/2;
			// point5
			points[8] =width - tableValue[8] - $("#txt__section__daybung").val()/2;
			points[9] =height - tableValue[9]/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	function suonNgan_matDung(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width;
			points[1] =height + tableValue[9]/2;
			// point2
			points[2] =width + tableValue[7];
			points[3] =height + tableValue[9]/2;
			// point3
			points[4] =width + tableValue[7];
			points[5] =height - tableValue[9]/2;
			// point4
			points[6] =width;
			points[7] =height - tableValue[9]/2;
			// point5
			points[8] =width;
			points[9] =height + tableValue[9]/2;
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// polygons của sườn đỡ bulong.
	function suonDoBuLong_matbang(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width - tableValue[12]/2;
			points[1] =height - $("#txt__section__chieucao").val()/2 - tableValue[11];
			// point2
			points[2] =width + tableValue[12]/2;
			points[3] =height - $("#txt__section__chieucao").val()/2 - tableValue[11];
			// point3
			points[4] =width + tableValue[12]/2;
			points[5] =height - $("#txt__section__chieucao").val()/2;
			// point4
			points[6] =width - tableValue[12]/2;
			points[7] =height - $("#txt__section__chieucao").val()/2;
			// point5
			points[8] =width - tableValue[12]/2;
			points[9] =height - $("#txt__section__chieucao").val()/2 - tableValue[11];
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
  }
  function suonDoBuLong_matDung1(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width;
			points[1] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point2
			points[2] =width + tableValue[10];
			points[3] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// point3
			points[4] =width + tableValue[10];
			points[5] =height - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
			// point4
			points[6] =width + tableValue[10]/2;
			points[7] =height - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
			// point5
			points[8] =width;
      points[9] =height - tableValue[1]/2 + tableValue[6];
      // point6
			points[10] =width;
			points[11] =height - $("#txt__section__chieucao").val()/2 - tableValue[6];
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
  }
  function suonDoBuLong_matDung2(width,height) {
		var points = [];
		// lấy giá trị kết qua table truyền vào mảng.
		if($(".table__value").length !== 0) {
			// point1
			points[0] =width;
			points[1] =height + $("#txt__section__chieucao").val()/2 + tableValue[6];
			// point2
			points[2] =width + tableValue[10];
			points[3] =height + $("#txt__section__chieucao").val()/2 + tableValue[6];
			// point3
			points[4] =width + tableValue[10];
			points[5] =height + $("#txt__section__chieucao").val()/2 + tableValue[6] + tableValue[11];
			// point4
			points[6] =width + tableValue[10]/2;
			points[7] =height + $("#txt__section__chieucao").val()/2 + tableValue[6] + tableValue[11];
			// point5
			points[8] =width;
      points[9] =height + tableValue[1]/2 - tableValue[6];
      // point6
			points[10] =width;
			points[11] =height + $("#txt__section__chieucao").val()/2 + tableValue[6];
			// chuyển tọa độ vào svg
			var html ='<polyline points="' + points.join(" ") + '"></polyline>';
		}
		return html;
	}
	// vẽ chi tiết chân cột
	$("#btn__ve").click(function () {
		$("#vechancot").empty();
		var html = VeMatCatCot() 
							+ banDe_matbang() 
							+ damDe_matbang(svgWidht/2,svgHeight/2)
							+ damDe_matbang(svgWidht/2,svgHeight/2 + parseFloat($("#txt__section__chieucao").val()) + tableValue[6])
							+ suonNgan_matbang(svgWidht/2,svgHeight/2)
							+ suonNgan_matbang(svgWidht/2 + parseFloat($("#txt__section__daybung").val()) + tableValue[8],svgHeight/2)
							+ suonDoBuLong_matbang(svgWidht/2,svgHeight/2)
							+ suonDoBuLong_matbang(svgWidht/2 + 12,svgHeight/2)
							+ suonDoBuLong_matbang(svgWidht/2 - 12,svgHeight/2)
							+ suonDoBuLong_matbang(svgWidht/2,svgHeight/2 
																		+ parseFloat($("#txt__section__chieucao").val())
																		+ parseFloat($("#txt__section__daycanh").val())
																		+ tableValue[11])
							+ suonDoBuLong_matbang(svgWidht/2 + 12,svgHeight/2 
																		+ parseFloat($("#txt__section__chieucao").val())
																		+ parseFloat($("#txt__section__daycanh").val())
																		+ tableValue[11])
							+ suonDoBuLong_matbang(svgWidht/2 - 12,svgHeight/2 
																		+ parseFloat($("#txt__section__chieucao").val())
																		+ parseFloat($("#txt__section__daycanh").val())
																		+ tableValue[11])
							+ banDe_matDung(svgWidht/2 + 70,svgHeight/2)
							+ banDe_matDungCot(svgWidht/2 + 70,svgHeight/2)
              + banDe_matDungCot(svgWidht/2 + 70,svgHeight/2 
                                  + parseFloat($("#txt__section__chieucao").val()) 
                                  - parseFloat($("#txt__section__daycanh").val()))
							+ breakLine(svgWidht/2 + 70,svgHeight/2)
              + suonNgan_matDung(svgWidht/2 + 70,svgHeight/2)
              + damDe_matDung(svgWidht/2 + 70,svgHeight/2)
              + damDe_matDung(svgWidht/2 + 70,svgHeight/2 
                                              + parseFloat($("#txt__section__chieucao").val())
                                              + parseFloat($("#txt__section__daycanh").val()))
              + suonDoBuLong_matDung1(svgWidht/2 + 70,svgHeight/2 - tableValue[6])
              + suonDoBuLong_matDung2(svgWidht/2 + 70,svgHeight/2 + tableValue[6]);
		$("#vechancot").html(html);
	});
});
