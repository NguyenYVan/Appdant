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
var tietdien = {};
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
// ---------------------------------------------------
$(document).ready(function () {
	$("#btn__tinhtoan").click(function () {
		// truyền các giá trị đầu vào vào object
		// tải gió
		taiGio.momen = parseFloat($("#noiluc_taigio_momen").val());
		taiGio.lucnen = parseFloat($("#noiluc_taigio_lucnen").val());
		taiGio.luccat = parseFloat($("#noiluc_taigio_luccat").val());
		// tĩnh tải
		tinhTai.momen = parseFloat($("#noiluc_tinhtai_momen").val());
		tinhTai.lucnen = parseFloat($("#noiluc_tinhtai_lucnen").val());
		// hoạt tải
		hoatTai.momen = parseFloat($("#noiluc_hoattai_momen").val());
		hoatTai.lucnen = parseFloat($("#noiluc_hoattai_lucnen").val());
		// tổng hợp nội lực chân cột
		noiluc.momen = TinhNoiLuc(taiGio.momen, tinhTai.momen, hoatTai.momen);
		noiluc.lucnen = TinhNoiLuc(taiGio.lucnen, tinhTai.lucnen, hoatTai.lucnen);
		// vật liệu thép
		thep.macthep = $("#cbb__select__steel").val();
		thep.cuongdott = parseFloat($("#txt__steel__cuongdott").val());
		// vật liệu bêtông
		betong.macbetong = $("#cbb__select__concrete").val();
		betong.cuongdochiunen = parseFloat($("#txt__concrete__rb").val());
		betong.cuongdochiukeo = parseFloat($("#txt__concrete__rbt").val());
		// bu lông
		bulong.macbulong = $("#cbb__select__bold").val();
		bulong.cuongdochiukeo = parseFloat($("#txt__bold__cuongdochiukeo").val());
		// đường hàn
		duonghan.quehan = $("#cbb__select__weld").val();
		duonghan.cuongdott = parseFloat($("#txt__weld__cuongdott").val());
		// tiết diện
		tietdien.b = parseFloat($("#txt__section__berong").val());
		tietdien.h = parseFloat($("#txt__section__chieucao").val());
		tietdien.tw = parseFloat($("#txt__section__daybung").val());
		tietdien.tf = parseFloat($("#txt__section__daycanh").val());
		// --------------------------------------------------------------------------------
		// tính toán thiết kế bản đế
		// hệ số phụ thuộc cấp độ bền bê tông.
		var alPha;
		var phiB;
		// cường độ chịu nén tính toán cục bộ của bê tông móng.
		var rbLoc;
		// hệ số phụ thuộc đặc điểm phân phối tải trọng cục bộ trên diện tích bị ép
		var pSi;
		// tính toán chiều rộng của bản đế
		bande.chieuRongBanDe = tietdien.b + 15;
		if (betong.macbetong === "b15" || betong.macbetong === "b20" || betong.macbetong === "b25") {
			alPha = 1;
		} else {
			alPha = 13.5*(betong.cuongdochiukeo/betong.cuongdochiunen);
		}
		// giả tiết giá trị phiB = 1.2
		phiB = 1.2;
		// rbLoc có đơn vị là daN/cm2
		rbLoc = alPha*phiB*parseFloat(betong.cuongdochiunen);
		// do tải nén lún phân bố không đều lên ta có giá trị Psi
		pSi = 0.75;
		// từ đó tính toán được chiều dài của bản đế
		bande.chieuDaiBanDe = Math.round((parseFloat(noiluc.lucnen)/(parseFloat(2*bande.chieuRongBanDe)*rbLoc*pSi)) + Math.sqrt(Math.pow((parseFloat(noiluc.lucnen)/(parseFloat(2*bande.chieuRongBanDe)*rbLoc*pSi)),2)+parseFloat(6*noiluc.momen)/(parseFloat(2*bande.chieuRongBanDe)*rbLoc*pSi)));
		if (bande.chieuDaiBanDe < tietdien.h) {
			bande.chieuDaiBanDe = tietdien.h + 23;
		} else {
			bande.chieuDaiBanDe=bande.chieuDaiBanDe + 23;
		}
		// tính ứng suất dưới bản đế.
		var sigMaMax, sigMaMin;
		sigMaMax = parseFloat(noiluc.lucnen)/(parseFloat(bande.chieuRongBanDe)*parseFloat(bande.chieuDaiBanDe)) + (6*parseFloat(noiluc.momen))/parseFloat((bande.chieuRongBanDe) * Math.pow(parseFloat(bande.chieuDaiBanDe),2));
		sigMaMin = parseFloat(noiluc.lucnen)/(parseFloat(bande.chieuRongBanDe)*parseFloat(bande.chieuDaiBanDe)) - (6*parseFloat(noiluc.momen))/parseFloat((bande.chieuRongBanDe) * Math.pow(parseFloat(bande.chieuDaiBanDe),2));
		if (Math.max(Math.abs(sigMaMin),Math.abs(sigMaMax))> pSi*rbLoc) {
			$('body').addClass('bg-danger');
			alert("Ứng suất dưới bản đế vượt quá giới hạn.");
		} else {
			$('body').removeClass('bg-danger');
		}
		bande.sigMaMax = sigMaMax;
		bande.sigMaMin = sigMaMin;
		// khoảng cách từ mép bản đế phía SigmaMin tới điểm có Sigma = 0.
		bande.y1 = (Math.abs(sigMaMin)*parseFloat(bande.chieuDaiBanDe))/(Math.abs(sigMaMax)+Math.abs(sigMaMin));
		var momenMaxOBan = momenMaxOBan(sigMaMax,sigMaMin,parseFloat(tietdien.h),parseFloat(tietdien.tw),parseFloat(bande.chieuDaiBanDe),parseFloat(bande.chieuRongBanDe));
		bande.chieuDayBanDe = Math.sqrt((6 * parseFloat(momenMaxOBan))/(parseFloat(thep.cuongdott) * 1));
		if (bande.chieuDayBanDe <= 1) {
			bande.chieuDayBanDe = 1;
		} else if (bande.chieuDayBanDe >= 4) {
			bande.chieuDayBanDe = 4;
		} else {
			bande.chieuDayBanDe = Math.round(bande.chieuDayBanDe);
		}
		console.log(bande);
		function momenMaxOBan(sigMaMax,sigMaMin,hCot,tw,lBanDe,bBanDe) {
			var lOBan1 = (lBanDe - hCot)/2;
			var sigMaOBan1 = Math.abs(sigMaMin + (sigMaMax - sigMaMin)*(lOBan1/lBanDe));
			var a2 = (hCot/2) - 1;
			var b2 = (bBanDe - tw)/2;
			var alphaB = noiSuyAlphaB(a2,b2);
			momenUonOBan = alphaB*sigMaOBan1*a2*a2;
			bande.momenUonOBan = momenUonOBan;
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
		// ----------------------------------------------------------------------------------------------
		// Tính toán dầm đế
		var beta = 0.7;
		// chọn chiều dày dầm đế tdd = 1 cm.
		damde.chieuDayDamDe = 1;
		// chọn chiều cao đường hàn hf = 1cm.
		damde.chieuCaoDuongHan = 1;
		// lực tác dụng vào đường hàn của dầm đế với cánh cột.
		var Ndd = (parseFloat(noiluc.lucnen)/2) + (parseFloat(noiluc.momen)/(parseFloat(tietdien.h) - parseFloat(tietdien.tf)));
		// chiều dài cần thiết của đường hàn.
		var Lw = Math.round(Ndd/(2*beta*parseFloat(duonghan.cuongdott)*parseFloat(damde.chieuCaoDuongHan))) + 1;
		// chọn chiều cao và chiều dài của dầm đế.
		damde.chieuCaoDamDe = Lw + 1;
		damde.chieuDaiDamDe = bande.chieuRongBanDe;
		while(damde.chieuCaoDamDe % 5 !== 0) {
			damde.chieuCaoDamDe +=1;
		}
		// kiểm tra khả năng chịu uốn của dầm đế do phản lực từ đáy móng.
		// tải trọng dây uốn lấy dần đúng là phân bố đều.
		var qUonDame = Math.abs(sigMaMin)*((bande.chieuDaiBanDe - tietdien.h)/2 + (tietdien.h - 1)/2);
		// tính momen uốn dầm đế.
		var momenUonDamDe = qUonDame*(Math.pow((bande.chieuRongBanDe - parseFloat(tietdien.tw))/2 - parseFloat(tietdien.b),2));
		function sigMaDamDe(t) {
			return 6 * momenUonDamDe/(t*Math.pow(damde.chieuCaoDamDe,2));
		}
		var sigMaDamDe = sigMaDamDe(damde.chieuDayDamDe);
		while(sigMaDamDe > thep.cuongdott) {
			damde.chieuDayBanDe = damde.chieuDayBanDe + 1;
			sigMaDamDe = sigMaDamDe(damde.chieuDayBanDe);
		}
		damde.Ndd = Ndd;
		damde.Lwdd = Lw;
		damde.sigMaDamDe = sigMaDamDe;
		console.log(damde);
		// ------------------------------------------------------------------------------------------------------
		// tính sườn ngăn bản đế
		// chọn chiều dày sườn ngăn = 1cm.
		suonngan.chieuDaySuonNgan = 1;
		suonngan.chieuDaiSuonNgan = (bande.chieuRongBanDe - parseFloat(tietdien.tw))/2;
		var sigmaSuonNgan = bande.sigmaOBan1;
		// tải phân bố tác dụng lên sườn ngăn.
		var qSuonNgan = sigmaSuonNgan * (parseFloat(tietdien.h)/2);
		var momenSuonNgan = qSuonNgan * Math.pow(suonngan.chieuDaiSuonNgan,2)/6;
		var luccatSuonNgan = qSuonNgan*suonngan.chieuDaiSuonNgan;
		// tính toán chiều cao của sườn ngăn.
		var hSuonNgan = Math.round(Math.sqrt(6*momenSuonNgan/(suonngan.chieuDaySuonNgan*parseFloat(thep.cuongdott)*1)));
		while(hSuonNgan % 5 !== 0) {
			hSuonNgan += 1;
		}
		suonngan.chieuCaoSuonNgan = hSuonNgan;
		// chọn chiều cao đường hàn = 1cm.
		suonngan.chieuCaoDuongHan = 1;
		// chiều dài cần thiết của đường hàn.
		suonngan.chieuDaiDuongHan = suonngan.chieuCaoSuonNgan - 1;
		// kiểm tra ứng suất đường hàn.
		suonngan.ungSuatDuongHan = Math.sqrt(Math.pow(6*momenSuonNgan/(2*0.7*suonngan.chieuCaoDuongHan*Math.pow(suonngan.chieuDaiDuongHan,2)),2) + Math.pow(luccatSuonNgan/(2*0.7*suonngan.chieuCaoDuongHan*suonngan.chieuDaiDuongHan),2));
		while(suonngan.ungSuatDuongHan > parseFloat(thep.cuongdott)) {
			suonngan.chieuCaoSuonNgan +=1;
			suonngan.chieuDaiDuongHan +=1;
			suonngan.ungSuatDuongHan = Math.sqrt(Math.pow(6*momenSuonNgan/(2*0.7*suonngan.chieuCaoDuongHan*Math.pow(suonngan.chieuDaiDuongHan,2)),2) + Math.pow(luccatSuonNgan/(2*0.7*suonngan.chieuCaoDuongHan*suonngan.chieuDaiDuongHan),2));
		}
		suonngan.momenSuonNgan = momenSuonNgan;
		suonngan.luccatSuonNgan = luccatSuonNgan;
		console.log(suonngan);
		// ------------------------------------------------------------------------------------------------------
		// tính bulong neo
		// khoảng cách từ điểm đặt lực tới tâm vùng nén.
		var a = bande.chieuDaiBanDe/2 - bande.y1/3;
		// chọn khoảng cách từ tâm bulong đến mép bản đế là delta để tính toán.
		delta = 8;
		DienTichBulong(delta);
		bulongneo.DuongKinhbl = DuongKinhBulong(bulongneo.Abl);
		function DienTichBulong(delta) {
			// lực kéo gây ra cho bulong
			var Nbl = 0.5*(parseFloat(noiluc.momen) + a*parseFloat(noiluc.lucnen))/(delta + bande.chieuDaiBanDe + a);
			var Abl = Nbl/parseFloat(bulong.cuongdochiukeo);
			bulongneo.Abl = Abl;
			bulongneo.Nbl = Nbl;
			return Abl;
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
		console.log(bulongneo);
		// ------------------------------------------------------------------------------------------------------
		// tính sườn đỡ bulông
		suondobulong.chieuDaySuonDoBl = 1;
		suondobulong.ChieuCaoSuonDoBl = damde.chieuCaoDamDe;
		// chọn chiều dài cánh tay đòn. Coi sườn đỡ buloong làm việc như dầm console ngàm vào dầm đế
		var LSuonDoBl = 8 + (bande.chieuDaiBanDe - parseFloat(tietdien.h))/2 - damde.chieuDayDamDe;
		// momen tác dụng nên sườn
		suondobulong.momen = bulongneo.Nbl*LSuonDoBl;
		function KiemTraSuondobulong(t) {
			var sigmaSuonDoBulong = 3*suondobulong.momen/(Math.pow(suondobulong.ChieuCaoSuonDoBl,2)*t)
		return sigmaSuonDoBulong;
		}
		// kiểm tra chiều dày sườn đỡ.
		if(KiemTraSuondobulong(suondobulong.chieuDaySuonDoBl) > parseFloat(thep.cuongdott)) {
			suondobulong.chieuDaySuonDoBl += 1;
			KiemTraSuondobulong(suondobulong.chieudaySuonDoBl);
		}
		suondobulong.sigmaSuonDoBulong = KiemTraSuondobulong(suondobulong.chieuDaySuonDoBl);
		suondobulong.chieuCaoDuongHan = 1.2;
		suondobulong.momenKhangUon = 4*0.7*suondobulong.chieuCaoDuongHan*Math.pow(suondobulong.ChieuCaoSuonDoBl - 1,2)/6;
		suondobulong.dienTichDuongHan = 4*0.7*suondobulong.chieuCaoDuongHan*(suondobulong.ChieuCaoSuonDoBl - 1);
		// ứng suất trong đường hàn
		suondobulong.ungSuatDuongHan = Math.sqrt(Math.pow(suondobulong.momen/suondobulong.momenKhangUon,2)+Math.pow(bulongneo.Nbl/suondobulong.dienTichDuongHan,2));
		console.log(suondobulong);
		// ------------------------------------------------------------------
		// kết quả
		var ketqua =[];
		ketqua[0] = bande.chieuDaiBanDe;
		ketqua[1] = bande.chieuRongBanDe;
		ketqua[2] = bande.chieuDayBanDe;

		ketqua[3] = damde.chieuCaoDamDe;
		ketqua[4] = damde.chieuDaiDamDe;
		ketqua[5] = damde.chieuDayDamDe;

		ketqua[6] = suonngan.chieuCaoSuonNgan;
		ketqua[7] = suonngan.chieuDaySuonNgan;

		ketqua[8] = suondobulong.ChieuCaoSuonDoBl;
		ketqua[9] = suondobulong.chieuDaySuonDoBl;

		ketqua[10] = bulongneo.DuongKinhbl;
		console.log(ketqua);
		$(".thuy").html("<td class=\"table__value\">1</td>");
	});
});
