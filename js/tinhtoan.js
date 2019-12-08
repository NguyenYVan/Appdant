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
		// hệ số phụ thuộc đặc điểm phân phối tải trọng cục bộ trên diện tíc bị ép
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
		// do tải nén lún phân bố không đều lên ta có giá trị Psi
		pSi = 0.75;
		// từ đó tính toán được chiều dài của bản đế
		bande.chieuDaiBanDe = Math.round(4 + (parseFloat(noiluc.lucnen)/(parseFloat(2*bande.chieuRongBanDe)*phiB*pSi)) + Math.sqrt(Math.pow((parseFloat(noiluc.lucnen)/(parseFloat(2*bande.chieuRongBanDe)*phiB*pSi)),2)+parseFloat(6*noiluc.momen)/(parseFloat(2*bande.chieuRongBanDe)*phiB*pSi)),0);
		// tính ứng suất dưới bản đế.
		var sigMaMax, sigMaMin;
		sigMaMax = parseFloat(noiluc.lucnen)/(parseFloat(bande.chieuRongBanDe)*parseFloat(bande.chieuDaiBanDe)) + (6*parseFloat(noiluc.momen))/parseFloat((bande.chieuRongBanDe) * Math.pow(parseFloat(bande.chieuDaiBanDe),2));
		sigMaMin = parseFloat(noiluc.lucnen)/(parseFloat(bande.chieuRongBanDe)*parseFloat(bande.chieuDaiBanDe)) - (6*parseFloat(noiluc.momen))/parseFloat((bande.chieuRongBanDe) * Math.pow(parseFloat(bande.chieuDaiBanDe),2));
		// khoảng cách từ mép bản đế phía SigmaMin tới điểm có Sigma = 0.
		var y1 = (Math.abs(sigMaMin)*parseFloat(bande.chieuDaiBanDe))/(Math.abs(sigMaMax)+Math.abs(sigMaMin));
		console.log(y1);
  });
});