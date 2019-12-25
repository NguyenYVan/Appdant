$(document).ready(function() {
  var w = $('.svg__wrap').width();
	var h = $('.svg__wrap').height();
	function polygons_mb_Cot(w,h) {
		var points=[];
		// point1
		points[0] =w - $("#txt__section__berong").val()/2;
		points[1] =h - $("#txt__section__chieucao").val()/2;
		// points
		points[2] =w + $("#txt__section__berong").val()/2;
		points[3] =h - $("#txt__section__chieucao").val()/2;
		// point3
		points[4] =w + $("#txt__section__berong").val()/2;
		points[5] =h - $("#txt__section__chieucao").val()/2 + parseFloat($("#txt__section__daycanh").val());
		// point4
		points[6] =w + parseFloat($("#txt__section__daybung").val())/2;
		points[7] =h - $("#txt__section__chieucao").val()/2 + parseFloat($("#txt__section__daycanh").val());
		// point5
		points[8] =w + parseFloat($("#txt__section__daybung").val())/2;
		points[9] =h + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point6
		points[10] =w + $("#txt__section__berong").val()/2;
		points[11] =h + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point7
		points[12] =w + $("#txt__section__berong").val()/2;
		points[13] =h + parseFloat($("#txt__section__chieucao").val()/2);
		// point8
		points[14] =w - $("#txt__section__berong").val()/2;
		points[15] =h + parseFloat($("#txt__section__chieucao").val()/2);
		// point9
		points[16] =w - $("#txt__section__berong").val()/2;
		points[17] =h + parseFloat($("#txt__section__chieucao").val()/2)- parseFloat($("#txt__section__daycanh").val());
		// point10
		points[18] =w - parseFloat($("#txt__section__daybung").val())/2;
		points[19] =h + parseFloat($("#txt__section__chieucao").val()/2) - parseFloat($("#txt__section__daycanh").val());
		// point11
		points[20] =w - parseFloat($("#txt__section__daybung").val())/2;
		points[21] =h - parseFloat($("#txt__section__chieucao").val()/2) + parseFloat($("#txt__section__daycanh").val());
		// point12
		points[22] =w - parseFloat($("#txt__section__berong").val())/2;
		points[23] =h - parseFloat($("#txt__section__chieucao").val()/2) + parseFloat($("#txt__section__daycanh").val());
		// point13
		points[24] =w - $("#txt__section__berong").val()/2;
		points[25] =h - $("#txt__section__chieucao").val()/2;
		// chuyển tọa độ vào svg
		return points;
	}
	// --------------------------------------------------------------------
	// polygons của bản cột.
	function polygons_md_cot(w,h) {
		var points = [];
		// point1
		points[0] =w;
		points[1] =h - parseFloat($("#txt__section__chieucao").val())/2;
		// point2
		points[2] =w;
		points[3] =h - parseFloat($("#txt__section__chieucao").val())/2 + parseFloat($("#txt__section__daycanh").val());
		// point3
		points[4] =w + 50;
		points[5] =h - parseFloat($("#txt__section__chieucao").val())/2 + parseFloat($("#txt__section__daycanh").val());
		// point4
		points[6] =w + 50;
		points[7] =h - parseFloat($("#txt__section__chieucao").val())/2;
		// point5
		points[8] =w;
		points[9] =h - parseFloat($("#txt__section__chieucao").val())/2;
		return points;
	}
	// vẽ polygons break line.ketqu
	function polygons_breakLine(w,h) {
		var points = [];
		// point1
		points[0] =w + 50;
		points[1] =h - parseFloat($("#txt__section__chieucao").val())/2 - 5;
		// point2
		points[2] =w + 50;
		points[3] =h - 5;
		// point3
		points[4] =w + 40;
		points[5] =h;
		// point4
		points[6] =w + 60;
		points[7] =h;
		// point5
		points[8] =w + 50;
		points[9] =h + 5;
		// point6
		points[10] =w + 50;
		points[11] =h + parseFloat($("#txt__section__chieucao").val())/2 + 5;
		return points;
	}
	// polygons của bản đế.
	function polygons_mb_banDe(w,h) {
		var points = [];
		// point1
		points[0] =w - tableValue[2]/2;
		points[1] =h - tableValue[1]/2;
		// point2
		points[2] =w + tableValue[2]/2;
		points[3] =h - tableValue[1]/2;
		// point3
		points[4] =w + tableValue[2]/2;
		points[5] =h + tableValue[1]/2;
		// point4
		points[6] =w - tableValue[2]/2;
		points[7] =h + tableValue[1]/2;
		// point5
		points[8] =w - tableValue[2]/2;
		points[9] =h - tableValue[1]/2;
		return points;
	}
	function polygons_md_banDe(w,h) {
		var points = [];
		// point1
		points[0] =w - tableValue[3];
		points[1] =h - tableValue[1]/2;
		// point2
		points[2] =w;
		points[3] =h - tableValue[1]/2;
		// point3
		points[4] =w;
		points[5] =h + tableValue[1]/2;
		// point4
		points[6] =w - tableValue[3];
		points[7] =h + tableValue[1]/2;
		// point5
		points[8] =w - tableValue[3];
		points[9] =h - tableValue[1]/2;
		return points;
	}
	// polygons của dầm đế.
	function polygons_mb_damDe(w,h) {
		var points = [];
		// point1
		points[0] =w - tableValue[5]/2 ;
		points[1] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point2
		points[2] =w - tableValue[5]/2 ;
		points[3] =h - $("#txt__section__chieucao").val()/2;
		// point3
		points[4] =w + tableValue[5]/2;
		points[5] =h - $("#txt__section__chieucao").val()/2;
		// point4
		points[6] =w + tableValue[5]/2;
		points[7] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point5
		points[8] =w - tableValue[5]/2 ;
		points[9] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		return points;
  }
  function polygons_md_damDe(w,h) {
		var points = [];
		// point1
		points[0] =w;
		points[1] =h - $("#txt__section__chieucao").val()/2;
		// point2
		points[2] =w + tableValue[4];
		points[3] =h - $("#txt__section__chieucao").val()/2;
		// point3
		points[4] =w + tableValue[4];
		points[5] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point4
		points[6] =w;
		points[7] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point5
		points[8] =w;
		points[9] =h - $("#txt__section__chieucao").val()/2;
		return points;
  }
	// polygons của sườn ngăn bản đế.
	function polygons_mb_suonNgan(w,h) {
		var points = [];
		// point1
		points[0] =w - tableValue[8] - $("#txt__section__daybung").val()/2;
		points[1] =h - tableValue[9]/2;
		// point2
		points[2] =w - $("#txt__section__daybung").val()/2;
		points[3] =h - tableValue[9]/2;
		// point3
		points[4] =w - $("#txt__section__daybung").val()/2;
		points[5] =h + tableValue[9]/2;
		// point4
		points[6] =w - tableValue[8] - $("#txt__section__daybung").val()/2;
		points[7] =h + tableValue[9]/2;
		// point5
		points[8] =w - tableValue[8] - $("#txt__section__daybung").val()/2;
		points[9] =h - tableValue[9]/2;
		return points;
	}
	function polygons_md_suonNgan(w,h) {
		var points = [];
		// point1
		points[0] =w;
		points[1] =h + tableValue[9]/2;
		// point2
		points[2] =w + tableValue[7];
		points[3] =h + tableValue[9]/2;
		// point3
		points[4] =w + tableValue[7];
		points[5] =h - tableValue[9]/2;
		// point4
		points[6] =w;
		points[7] =h - tableValue[9]/2;
		// point5
		points[8] =w;
		points[9] =h + tableValue[9]/2;
		return points;
	}
	// polygons của sườn đỡ bulong.
	function polygons_mb_suonDo(w,h) {
		var points = [];
		// point1
		points[0] =w - tableValue[12]/2;
		points[1] =h - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
		// point2
		points[2] =w + tableValue[12]/2;
		points[3] =h - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
		// point3
		points[4] =w + tableValue[12]/2;
		points[5] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point4
		points[6] =w - tableValue[12]/2;
		points[7] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point5
		points[8] =w - tableValue[12]/2;
		points[9] =h - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
		return points;
  }
  function polygons_md_suonDo1(w,h) {
		var points = [];
		// point1
		points[0] =w;
		points[1] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point2
		points[2] =w + tableValue[10];
		points[3] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		// point3
		points[4] =w + tableValue[10];
		points[5] =h - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
		// point4
		points[6] =w + tableValue[10]/2;
		points[7] =h - $("#txt__section__chieucao").val()/2 - tableValue[6] - tableValue[11];
		// point5
		points[8] =w;
		points[9] =h - tableValue[1]/2;
		// point6
		points[10] =w;
		points[11] =h - $("#txt__section__chieucao").val()/2 - tableValue[6];
		return points;
  }
  function polygons_md_suonDo2(w,h) {
		var points = [];
		// point1
		points[0] =w;
		points[1] =h + $("#txt__section__chieucao").val()/2 + tableValue[6];
		// point2
		points[2] =w + tableValue[10];
		points[3] =h + $("#txt__section__chieucao").val()/2 + tableValue[6];
		// point3
		points[4] =w + tableValue[10];
		points[5] =h + $("#txt__section__chieucao").val()/2 + tableValue[6] + tableValue[11];
		// point4
		points[6] =w + tableValue[10]/2;
		points[7] =h + $("#txt__section__chieucao").val()/2 + tableValue[6] + tableValue[11];
		// point5
		points[8] =w;
		points[9] =h + tableValue[1]/2;
		// point6
		points[10] =w;
		points[11] =h + $("#txt__section__chieucao").val()/2 + tableValue[6];
		return points;
	}
	// --------------------------------------------------------
	var draw1 = SVG('creat1');
	var mb_cot = polygons_mb_Cot(w/2,h/2);
	svgLineArr(draw1,mb_cot);
	dimNgang(draw1,mb_cot[0],mb_cot[2]);
	text(draw1,$("#txt__section__berong").val(),w/2,h/2 - 95,0);
	dimDoc(draw1,mb_cot[1],mb_cot[9]);
	text(draw1,$("#txt__section__chieucao").val(),w/2-95,h/2 - 10,0);
	$("#txt__section__berong").change(function () {
		$("#creat1 svg").empty();
		mb_cot = polygons_mb_Cot(w/2,h/2);
		svgLineArr(draw1,mb_cot);
		dimNgang(draw1,mb_cot[0],mb_cot[2]);
		text(draw1,$("#txt__section__berong").val(),w/2,h/2 - 95,0);
		dimDoc(draw1,mb_cot[1],mb_cot[9]);
		text(draw1,$("#txt__section__chieucao").val(),w/2-95,h/2 - 10,0);
	});
	$("#txt__section__chieucao").change(function () {
		$("#creat1 svg").empty();
		mb_cot = polygons_mb_Cot(w/2,h/2);
		svgLineArr(draw1,mb_cot);
		dimNgang(draw1,mb_cot[0],mb_cot[2]);
		text(draw1,$("#txt__section__berong").val(),w/2,h/2 - 95,0);
		dimDoc(draw1,mb_cot[1],mb_cot[9]);
		text(draw1,$("#txt__section__chieucao").val(),w/2-95,h/2 - 10,0);
	});
	$("#txt__section__daybung").change(function () {
		$("#creat1 svg").empty();
		mb_cot = polygons_mb_Cot(w/2,h/2);
		svgLineArr(draw1,mb_cot);
		dimNgang(draw1,mb_cot[0],mb_cot[2]);
		text(draw1,$("#txt__section__berong").val(),w/2,h/2 - 95,0);
		dimDoc(draw1,mb_cot[1],mb_cot[9]);
		text(draw1,$("#txt__section__chieucao").val(),w/2-95,h/2 - 10,0);
	});
	$("#txt__section__daycanh").change(function () {
		$("#creat1 svg").empty();
		mb_cot = polygons_mb_Cot(w/2,h/2);
		svgLineArr(draw1,mb_cot);
		dimNgang(draw1,mb_cot[0],mb_cot[2]);
		text(draw1,$("#txt__section__berong").val(),w/2,h/2 - 95,0);
		dimDoc(draw1,mb_cot[1],mb_cot[9]);
		text(draw1,$("#txt__section__chieucao").val(),w/2-95,h/2 - 10,0);
	});
	// --------------------------------------------------------
	// vẽ chi tiết chân cột
	var draw2 = SVG('creat2');
	var tableValue = [];
	$("#btn__ve").click(function () {
		// --------------------------------------------------------
		if($(".table__value").length !== 0) {
			for (i = 1; i <= $(".table__value").length; i++) {
				tableValue[i-1] = parseFloat( $(".table__value:nth-child(" + i + ")").text());
			}
			mb_cot2 = polygons_mb_Cot(w/2 - 40,h/2);
			md_cot1 =polygons_md_cot(w/2 + 20,h/2);
			md_cot2 =polygons_md_cot(w/2 + 20,h/2 + parseFloat($("#txt__section__chieucao").val()) - parseFloat($("#txt__section__daycanh").val()));
			breakLine = polygons_breakLine(w/2 + 20,h/2);
			mb_bande = polygons_mb_banDe(w/2 - 40,h/2);
			md_bande = polygons_md_banDe(w/2 + 20,h/2)
			mb_damde1 = polygons_mb_damDe(w/2 - 40,h/2);
			mb_damde2 = polygons_mb_damDe(w/2 - 40,h/2 + parseFloat($("#txt__section__chieucao").val()) + tableValue[6]);
			md_damde1 = polygons_md_damDe(w/2 + 20,h/2)
			md_damde2 = polygons_md_damDe(w/2 + 20,h/2 + parseFloat($("#txt__section__chieucao").val()) + tableValue[6]);
			mb_suonngan1 = polygons_mb_suonNgan(w/2 - 40,h/2);
			mb_suonngan2 = polygons_mb_suonNgan(w/2 - 40 + parseFloat($("#txt__section__daybung").val()) + tableValue[8],h/2);
			md_suonngan = polygons_md_suonNgan(w/2 + 20,h/2);
			mb_suondo1 = polygons_mb_suonDo(w/2 - 40,h/2)
			mb_suondo2 = polygons_mb_suonDo(w/2 - 40 - 12,h/2);
			mb_suondo3 = polygons_mb_suonDo(w/2 - 40 + 12,h/2);
			mb_suondo4 = polygons_mb_suonDo(w/2 - 40,h/2 + parseFloat($("#txt__section__chieucao").val()) 
																									+ parseFloat($("#txt__section__daycanh").val()) 
																									+ tableValue[11]
																									+ 2*tableValue[6]);
			mb_suondo5 = polygons_mb_suonDo(w/2 - 40 - 12,h/2 + parseFloat($("#txt__section__chieucao").val()) 
																									+ parseFloat($("#txt__section__daycanh").val()) 
																									+ tableValue[11]
																									+ 2*tableValue[6]);
			mb_suondo6 = polygons_mb_suonDo(w/2 - 40 + 12,h/2 + parseFloat($("#txt__section__chieucao").val()) 
																									+ parseFloat($("#txt__section__daycanh").val()) 
																									+ tableValue[11]
																									+ 2*tableValue[6]);
			md_suondo1 = polygons_md_suonDo1(w/2 + 20,h/2);
			md_suondo2 = polygons_md_suonDo2(w/2 + 20,h/2);
			// --------------------------------------------------------
			$("#creat2 svg").empty();
			svgLineArr(draw2,mb_cot2);
			svgLineArr(draw2,md_cot1);
			svgLineArr(draw2,md_cot2);
			svgLineArr(draw2,breakLine);
			svgLineArr(draw2,mb_bande);
			svgLineArr(draw2,md_bande);
			svgLineArr(draw2,mb_damde1);
			svgLineArr(draw2,mb_damde2);
			svgLineArr(draw2,md_damde1);
			svgLineArr(draw2,md_damde2);
			svgLineArr(draw2,mb_suonngan1);
			svgLineArr(draw2,mb_suonngan2);
			svgLineArr(draw2,md_suonngan);
			svgLineArr(draw2,mb_suondo1);
			svgLineArr(draw2,mb_suondo2);
			svgLineArr(draw2,mb_suondo3);
			svgLineArr(draw2,mb_suondo4);
			svgLineArr(draw2,mb_suondo5);
			svgLineArr(draw2,mb_suondo6);
			svgLineArr(draw2,md_suondo1);
			svgLineArr(draw2,md_suondo2);
			// dim
			var a = w/2 - 40;
			var b = h/2 - 95;
			dimNgang(draw2,mb_bande[0],mb_bande[2]);
			text(draw2,String(tableValue[2]),a,b,0)
			dimNgang(draw2,md_bande[0],md_bande[2]);
			text(draw2,String(tableValue[3]),a + 60 - tableValue[3]/2,b,0);
			dimNgang(draw2,md_suondo1[0],md_suondo1[2]);
			text(draw2,String(tableValue[10]),a + 60 - tableValue[3]/2 + tableValue[10]/2,b,0);
			dimDoc(draw2,mb_bande[1],mb_bande[5]);
			text(draw2,String(tableValue[1]),a - 38,b + 90,90);
		} else {
			alert('chưa có kết quả tính toán');
		}
	});
	// --------------------------------------------------------
	function svgLineArr(draw,arr) {
		for(var i = 0; i < arr.length - 2; i++) {
			if(i % 2 === 0) {
				svgPoLyLine(draw,arr,i);
			}
		}
		return this;
	}
	function svgPoLyLine(draw,arr,i) {
		return svgLine(draw,arr[i],arr[i+1],arr[i+2],arr[i+3]);
	}
	function svgLine(draw,x1,y1,x2,y2) {
		return draw.line([[x1,y1],[x2,y2]]).stroke({width:1, color:'#000'});
	}
// --------------------------------------------------------
	function text(draw,text,x,y,rotate) {
		var text = draw.text(text);
		text.font({
			fill: '#000',
			family:   'Helvetica',
			size:     10,
			anchor:   'middle',
			weidht: 400,
		})
		text.move(x,y);
		text.rotate(rotate);
	}
	function dimNgang(draw,x1,x2) {
		svgLine(draw,x1-5,h/2 - 80,x2 + 5,h/2 - 80);
		svgLine(draw,x1,h/2 - 70,x1,h/2 - 85);
		svgLine(draw,x2,h/2 - 70,x2,h/2 - 85);
	}
	function dimDoc(draw,y1,y2) {
		svgLine(draw,w/2 - 85,y1-5,w/2 - 85,y2+5);
		svgLine(draw,w/2 - 90,y1,w/2 - 75,y1);
		svgLine(draw,w/2 - 90,y2,w/2 - 75,y2);
	}
});
