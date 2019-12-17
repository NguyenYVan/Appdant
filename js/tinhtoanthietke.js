// các biến đầu vào
var taiGio = {};
var tinhTai = {};
var hoatTai = {};
// object tổng các lực tác dụng vào chân cột
var noiluc = {}
// vật liệu thép
var thep = {};
// vật liệu bê tông móng
var betong = {};
// bulông
var bulong = {};
// đường hàn
var duonghan = {};
// tiết diện
var tietdiencot = {};
// hàm tính nội lực
function TinhNoiLuc(a, b, c) {
	return Math.abs(a + b + c);
}
// dữ liệu sau tính toán
// bản đế
var bande = {};
var damde = {};
var suonngan = {};
var bulongneo = {};
var suondobulong = {};
// ----------------------------
$(document).ready(function () {
  $("#btn__tinhtoan").click(function () {
		// truyền dữ liệu vào các object tương ứng.
		taiGio.momen = parseFloat($("#noiluc_taigio_momen").val());
		taiGio.lucnen = parseFloat($("#noiluc_taigio_lucnen").val());
		taiGio.luccat = parseFloat($("#noiluc_taigio_luccat").val());
		tinhTai.momen = parseFloat($("#noiluc_tinhtai_momen").val());
		tinhTai.lucnen = parseFloat($("#noiluc_tinhtai_lucnen").val());
		hoatTai.momen = parseFloat($("#noiluc_hoattai_momen").val());
		hoatTai.lucnen = parseFloat($("#noiluc_hoattai_lucnen").val());
		// tổng hợp nội lực chân cột
		noiluc.momen = TinhNoiLuc(taiGio.momen, tinhTai.momen, hoatTai.momen);
		noiluc.lucnen = TinhNoiLuc(taiGio.lucnen, tinhTai.lucnen, hoatTai.lucnen);
		noiluc.luccat = TinhNoiLuc(taiGio.luccat,0,0);
		thep.mac = $("#cbb__select__steel").val();
		thep.cuongdott = parseFloat($("#txt__steel__cuongdott").val());
		betong.mac = $("#cbb__select__concrete").val();
		betong.cuongdochiunen = parseFloat($("#txt__concrete__rb").val());
		betong.cuongdochiukeo = parseFloat($("#txt__concrete__rbt").val());
		bulong.macbulong = $("#cbb__select__bold").val();
		bulong.cuongdochiukeo = parseFloat($("#txt__bold__cuongdochiukeo").val());
		duonghan.quehan = $("#cbb__select__weld").val();
		duonghan.cuongdott = parseFloat($("#txt__weld__cuongdott").val());
		tietdiencot.b = parseFloat($("#txt__section__berong").val());
		tietdiencot.h = parseFloat($("#txt__section__chieucao").val());
		tietdiencot.tw = parseFloat($("#txt__section__daybung").val());
		tietdiencot.tf = parseFloat($("#txt__section__daycanh").val());
		console.log("nội lực :", noiluc);
		console.log("thép :", thep);
		console.log("bê tông :", betong);
		console.log("buloong :", bulong);
		console.log("đường hàn :", duonghan);
		// ------------------------------------
		// tính toán thiết kế bản đế.
		BanDe(parseFloat(betong.cuongdochiunen),
					parseFloat(thep.cuongdott),
					parseFloat(tietdiencot.b),
					parseFloat(tietdiencot.h),
					parseFloat(tietdiencot.tw),
					noiluc.lucnen,
					noiluc.momen);
		console.log(bande);
		function BanDe(bt_cdChiuNen,thep_cdtt,cot_cRong,cot_cCao,cot_tw,noiluc_lucnen,noiluc_momen) {
			var alpha = 1;
			var phiB = 1.2;
			var pSi = 0.75;
			var rbLoc = alpha*phiB*bt_cdChiuNen;
			bande.cRong = cot_cRong + 15;
			bande.cDai = (noiluc_lucnen/(2*bande.cRong*rbLoc*pSi))
									 + Math.sqrt(Math.pow((noiluc_lucnen/(2*bande.cRong*rbLoc*pSi)),2) 
									 + 6*noiluc_momen/(2*bande.cRong*rbLoc*pSi));
			while(bande.cDai < cot_cCao) {
				bande.cDai = cot_cCao + 23;
			}
			// tính ứng suất dưới bản đế.
			bande.ungSuatMax = Math.round(noiluc_lucnen/(bande.cRong*bande.cDai) 
												+ (6*noiluc_momen)/(bande.cRong * Math.pow(bande.cDai,2)));
			bande.ungSuatMin = Math.round(noiluc_lucnen/(bande.cRong*bande.cDai) 
												- (6*noiluc_momen)/(bande.cRong * Math.pow(bande.cDai,2)));
			var maxUS = Math.max(Math.abs(bande.ungSuatMax),Math.abs(bande.ungSuatMax));
			if(maxUS>pSi*rbLoc) {
				$('body').addClass('bg-danger');
				alert("Ứng suất dưới bản đế vượt quá giới hạn. Hãy tăng mác bêtông hoặc kiểm tra lại tổng nội lực tác dụng chân cột.");
			} else {
				$('body').removeClass('bg-danger');
			}
			// khoảng cách từ mép bản đế phía SigmaMin tới điểm có Sigma = 0.
			bande.y1 = Math.abs(bande.ungSuatMin) * bande.cDai/(Math.abs(bande.ungSuatMax) + Math.abs(bande.ungSuatMin));
			bande.momenMaxOBan = momenMaxOBan(bande.ungSuatMax,bande.ungSuatMin,cot_cCao,cot_tw,bande.cDai,bande.cRong);
			bande.cDay = Math.sqrt(6 * bande.momenMaxOBan/(thep_cdtt * 1));
			if (bande.cDay <= 1) {
				bande.cDay = 1;
			} else if (bande.cDay >= 4) {
				bande.cDay = 4;
			} else {
				bande.cDay = Math.round(bande.cDay);
			}
			function momenMaxOBan(sigMaMax,sigMaMin,hCot,tw,lBanDe,bBanDe) {
				var lOBan1 = (lBanDe - hCot)/2;
				var sigMaOBan1 = Math.abs(sigMaMin + (sigMaMax - sigMaMin)*(lOBan1/lBanDe));
				var a2 = (hCot/2) - 1;
				var b2 = (bBanDe - tw)/2;
				var alphaB = noiSuyAlphaB(a2,b2);
				momenUonOBan = alphaB*sigMaOBan1*a2*a2;
				bande.sigmaOBan1 = sigMaOBan1;
				return momenUonOBan;
			}
			function noiSuyAlphaB(a,b) {
				var AlphaB;
				var tyle = b/a;
				if (tyle<= 0.5) {
					AlphaB = 0.06;
				} else if (0.5 < tyle && tyle < 0.6) {
					AlphaB = (0.06 + (0.074 - 0.06) * (tyle - 0.5) / (0.1));
				} else if (tyle = 0.6) {
					AlphaB = 0.074;
				} else if (0.6 < tyle && tyle < 0.7) {
					AlphaB = (0.074 + (0.088 - 0.074) * (tyle - 0.6) / (0.1));
				} else if (tyle = 0.7) {
					AlphaB = 0.088;
				} else if (0.7 < tyle && tyle < 0.8) {
					AlphaB = (0.088 + (0.097 - 0.088) * (tyle - 0.7) / (0.1));
				} else if (tyle = 0.8) {
					AlphaB = 0.097;
				} else if (0.8 < tyle && tyle < 0.9) {
					AlphaB = (0.097 + (0.107 - 0.097) * (tyle - 0.8) / (0.1));
				} else if (tyle = 0.9) {
					AlphaB = 0.107;
				} else if (0.9 < tyle && tyle < 1.0) {
					AlphaB = (0.107 + (0.112 - 0.107) * (tyle - 0.9) / (0.1));
				} else if (tyle = 1.0) {
					AlphaB = 0.112;
				} else if (1.0 < tyle && tyle < 1.2) {
					AlphaB = (0.112 + (0.12 - 0.112) * (tyle - 1) / (0.2));
				} else if (tyle = 1.2) {
					AlphaB = 0.12;
				} else if (1.2 < tyle && tyle < 1.4) {
					AlphaB = (0.12 + (0.126 - 0.12) * (tyle - 1.2) / (0.2));
				} else if (tyle = 1.4) {
					AlphaB = 0.126;
				} else if (1.4 < tyle && tyle < 2) {
					AlphaB = (0.126 + (0.132 - 0.126) * (tyle - 1.4) / (0.6));
				} else if (tyle = 2) {
					AlphaB = 0.132;
				} else {
					AlphaB = 0.133;
				}
				return AlphaB;
			}
		}
		// ------------------------------------
		// tính dầm đế
		DamDe(noiluc.lucnen,
				noiluc.momen,
				tietdiencot.h,
				tietdiencot.b,
				tietdiencot.tw,
				tietdiencot.tf,
				thep.cuongdott,
				duonghan.cuongdott);
		console.log(damde);
		function DamDe(noiluc_lucnen,noiluc_momen,cot_cCao,cot_cRong,cot_tw,cot_tf,thep_cdtt,han_cdtt) {
			var beta = 0.7;
			damde.cDay = 1;
			damde.cCaoDuongHan = 1;
			// lực tác dụng vào đường hàn của dầm đế với ngàm tại cánh cột.
			damde.Ndd = (noiluc_lucnen/2) 
									+ (noiluc_momen/(cot_cCao - cot_tf));
			// chiều dài cần thiết của đường hàn.
			damde.Lw = Math.round(damde.Ndd/(2*beta*han_cdtt*damde.cCaoDuongHan)) + 1;
			// chọn chiều cao và chiều dài của dầm đế.
			damde.cCao = damde.Lw + 1;
			damde.cRong = bande.cRong;
			while(damde.cCao % 5 !== 0) {
				damde.cCao +=1;
			}
			// tải trọng dây uốn lấy dần đúng là phân bố đều.
			damde.qUon = Math.abs(bande.ungSuatMin)*((bande.cDai - cot_cCao)/2 + (cot_cCao - 1)/2);
			// tính momen uốn dầm đế.
			damde.momenUon = damde.qUon*(Math.pow((bande.cRong - cot_tw)/2 - cot_cRong,2));
			// kiểm tra khả năng chịu uốn của dầm đế do phản lực từ đáy móng.
			damde.sigMaDamDe = 6 * damde.momenUon/(damde.cDay*Math.pow(damde.cCao,2));
			while(damde.sigMaDamDe > thep_cdtt) {
				damde.cDay += 0.1;
				damde.sigMaDamDe = 6 * damde.momenUon/(damde.cDay*Math.pow(damde.cCao,2));
			}
			return damde.sigMaDamDe;
		}
		// ------------------------------------
		// tính sườn ngăn bản đế
		SuonNgan(tietdiencot.h,
						tietdiencot.tw,
						noiluc.luccat,
						thep.cuongdott);
		console.log(suonngan);
		function SuonNgan(cot_cCao,cot_tw,noiluc_luccat,thep_cdtt) {
			beta = 0.7;
			suonngan.cCaoDuongHan = 1;
			suonngan.cDay = 1;
			suonngan.cRong = (bande.cRong - cot_tw)/2;
			suonngan.sigma = bande.sigmaOBan1;
			// tải phân bố tác dụng lên sườn ngăn.
			suonngan.qTaiPhanBo = suonngan.sigma * (cot_cCao/2);
			suonngan.momen = suonngan.qTaiPhanBo * Math.pow(suonngan.cRong,2)/6;
			suonngan.luccat = suonngan.qTaiPhanBo*suonngan.cRong + noiluc_luccat;
			// tính toán chiều cao của sườn ngăn.
			suonngan.cCao = Math.round(Math.sqrt(6*suonngan.momen/(suonngan.cDay*thep_cdtt*1)));
			while(suonngan.cCao % 5 !== 0) {
				suonngan.cCao += 1;
			}
			// chiều dài cần thiết của đường hàn.
			suonngan.Lw = suonngan.cCao - 1;
			// kiểm tra ứng suất đường hàn.
			suonngan.ungSuatDuongHan = Math.sqrt(Math.pow(6*suonngan.momen/
																(2*beta*suonngan.cCaoDuongHan*Math.pow(suonngan.Lw,2)),2) 
																+ Math.pow(suonngan.luccat/(2*beta*suonngan.cCaoDuongHan*suonngan.Lw),2));
			if(suonngan.ungSuatDuongHan > thep_cdtt) {
				suonngan.cDay += 1;
			}
			return suonngan.ungSuatDuongHan;
		}
		// ------------------------------------
		// tính bu lông neo.
		BulongNeo(noiluc.momen,
							noiluc.lucnen,
							bulong.cuongdochiukeo);
		console.log(bulongneo);
		function BulongNeo(noiluc_momen,noiluc_lucnen,bulong_cuongDoChiuKeo) {
			// chọn khoảng cách từ tâm bulong đến mép bản đế là delta để tính toán.
			bulongneo.delta = 8;
			// khoảng cách từ điểm đặt lực tới tâm vùng nén.
			bulongneo.a = bande.cDai/2 - bande.y1/3;
			// lực kéo gây ra cho bulong
			bulongneo.Nbl = 0.5*(noiluc_momen + bulongneo.a*noiluc_lucnen)/(bulongneo.delta + bande.cDai + bulongneo.a);
			// diện tích bulong
			bulongneo.Abl = bulongneo.Nbl/bulong_cuongDoChiuKeo;
			bulongneo.duongKinh = DuongKinhBulong(bulongneo.Abl);
		}
		function DuongKinhBulong(Abl) {
			var as =Abl*100/2;
			var dk;
			if(as<5.03) {
				dk = 3;
			} else if(as<8.78) {
				dk = 4;
			} else if(as<14.2) {
				dk = 5;
			} else if(as<20.1) {
				dk = 6;
			} else if(as<36.6) {
				dk = 8;
			} else if(as<58) {
				dk = 10;
			} else if(as<84.3) {
				dk = 12;
			} else if(as<115) {
				dk = 14;
			} else if(as<157) {
				dk = 16;
			} else if(as<192) {
				dk = 18;
			} else if(as<245) {
				dk = 20;
			} else if(as<303) {
				dk = 24;
			} else if(as<353) {
				dk = 27;
			} else if(as<459) {
				dk = 30;
			} else if(as<561) {
				dk = 33;
			} else if(as<694) {
				dk = 36;
			} else if(as<817) {
				dk = 39;
			} else if(as<976) {
				dk = 42;
			} else if(as<1121) {
				dk = 48;
			} else if(as<1473) {
				dk = 52;
			} else {
				dk = 64;
			}
			return dk;
		}
		// ------------------------------------
		// tính sườn đỡ bulong
		SuonDoBuLong(tietdiencot.h,
								thep.cuongdott);
		console.log(suondobulong);
		function SuonDoBuLong(cot_cCao,thep_cdtt) {
			beta = 0.7;
			suondobulong.cCaoDuongHan = 1.2;
			suondobulong.cDay = 1;
			suondobulong.cCao = damde.cCao;
			// chọn chiều dài cánh tay đòn. Coi sườn đỡ buloong làm việc như dầm console ngàm vào dầm đế
			var LSuonDoBl = 10 + (bande.cDai - cot_cCao)/2 - damde.cDay;
			suondobulong.cRong = LSuonDoBl;
			// momen tác dụng nên sườn
			suondobulong.momen = bulongneo.Nbl*LSuonDoBl;
			// kiểm tra chiều dày sườn đỡ.
			suondobulong.sigma = 3*suondobulong.momen/(Math.pow(suondobulong.cCao,2)*suondobulong.cDay);
			while(suondobulong.sigma > thep_cdtt) {
				suondobulong.cDay += 0.1;
				suondobulong.sigma = 3*suondobulong.momen/(Math.pow(suondobulong.cCao,2)*suondobulong.cDay);
			}
			suondobulong.momenKhangUon = 4*beta*suondobulong.cCaoDuongHan*Math.pow(suondobulong.cCao - 1,2)/6;
			suondobulong.dienTichDuongHan = 4*beta*suondobulong.cCaoDuongHan*(suondobulong.cCao - 1);
			// ứng suất trong đường hàn
			suondobulong.ungSuatDuongHan = Math.sqrt(Math.pow(suondobulong.momen/suondobulong.momenKhangUon,2) 
																	+ Math.pow(bulongneo.Nbl/suondobulong.dienTichDuongHan,2));
		}
		// ------------------------------------------------------------------
		// chuyển kết quả tính toán ra màn hình
		var ketqua =[];
		ketqua[0] = 1;
		ketqua[1] = bande.cDai;
		ketqua[2] = bande.cRong;
		ketqua[3] = bande.cDay;

		ketqua[4] = damde.cCao;
		ketqua[5] = damde.cRong;
		ketqua[6] = damde.cDay;

		ketqua[7] = suonngan.cCao;
		ketqua[8] = suonngan.cRong;
		ketqua[9] = suonngan.cDay;

		ketqua[10] = suondobulong.cCao;
		ketqua[11] = suondobulong.cRong;
		ketqua[12] = suondobulong.cDay;

		ketqua[13] = bulongneo.duongKinh;
		for(i = 0; i < ketqua.length;i++){
			ketqua[i] = "<td class=\"table__value\">" + ketqua[i] + "</td>";
		}
		$(".thuy").html(ketqua.join());
		// ------------------------------------------------------------------
		// lưu kết quả tính toán ra file text or excel.
	});
});