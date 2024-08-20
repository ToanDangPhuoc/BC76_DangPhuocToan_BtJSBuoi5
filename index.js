// Bài 1
let diemUuTien1 = 2.5;
let diemUuTien2 = 1.5;
let diemUuTien3 = 1;
let khuA = 2;
let khuB = 1;
let khuC = 0.5;
let ketQua = "";
let thongBao = "";

document.querySelector(".xacNhanBai1").onclick = function () {
  let khuVuc = document.getElementById("khuVuc").value;
  console.log(khuVuc);
  switch (khuVuc) {
    case "khuVucA":
      khuVuc = khuA;
      break;
    case "khuVucB":
      khuVuc = khuB;
      break;
    case "khuVucC":
      khuVuc = khuC;
      break;
    default:
      khuVuc = 0;
      break;
  }
  let diemUuTien = document.getElementById("doiTuong").value;
  switch (diemUuTien) {
    case "doiTuongA":
      diemUuTien = diemUuTien1;
      break;
    case "doiTuongB":
      diemUuTien = diemUuTien2;
      break;
    case "doiTuongC":
      diemUuTien = diemUuTien3;
      break;
    default:
      diemUuTien = 0;
      break;
  }
  let diemChuanDuocDien = document.getElementById("diemChuan").value * 1;
  if (diemChuanDuocDien >= 30) {
    alert("Vui lòng điền điểm chuẩn để tiếp tục");
    return;
  } else if (diemChuanDuocDien == 0) {
    alert("Vui lòng điền điểm chuẩn");
    return;
  }

  let diemMonThu1 = document.getElementById("diemMonThu1").value * 1;
  let diemMonThu2 = document.getElementById("diemMonThu2").value * 1;
  let diemMonThu3 = document.getElementById("diemMonThu3").value * 1;
  let tongSoDiem =
    diemMonThu1 + diemMonThu2 + diemMonThu3 + diemUuTien + khuVuc;
  thongBao = document.getElementById("ketQuaBai1");
  if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
    ketQua = "Bạn đã rớt do có 1 môn 0 điểm";
    thongBao.value = `${ketQua} và tổng số điểm của bạn là ${tongSoDiem}`;
  } else if (tongSoDiem >= diemChuanDuocDien) {
    ketQua = "Bạn đã đậu";
    thongBao.value = `${ketQua} và tổng số điểm của bạn là ${tongSoDiem}`;
  } else {
    ketQua = "Bạn đã rớt do không đủ điểm chuẩn";
    thongBao.value = `${ketQua} và tổng số điểm của bạn là ${tongSoDiem}`;
  }
};
// Bài 2
let tien50KwDau = 550;
let tien50Kwtieptheo = 650;
let tien100KwKe = 850;
let tien150KwKe = 110;
let tienKwConLai = 1300;
let tongTien = 0;
let ketQuaBai2 = 0;

document.getElementById("xacNhanBai2").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let soKw = document.getElementById("soDien").value * 1;
  if (isNaN(soKw) || soKw <= 0) {
    // kiểm tra nếu như người dùng k nhập số ô input  số Kw
    alert("vui lòng nhập số KW điện đã sử dụng");
    return;
  } else if (hoTen == null || hoTen.trim() === "") {
    // kiểm tra có phải người dùng để chuỗi rỗng trong ô input họ tên hay không
    alert("Vui lòng nhập họ tên khách hàng đăng kí");
    return;
  }

  if (soKw <= 50) {
    tongTien = soKw * tien50KwDau;
  } else if (soKw <= 100) {
    tongTien = Math.floor(50 * tien50KwDau + (soKw - 50) * tien50Kwtieptheo);
  } else if (soKw <= 200) {
    tongTien = Math.floor(
      50 * tien50KwDau + 50 * tien50Kwtieptheo + (soKw - 100) * tien100KwKe
    );
  } else if (soKw <= 350) {
    tongTien = Math.floor(
      50 * tien50KwDau +
        50 * tien50Kwtieptheo +
        100 * tien100KwKe +
        (soKw - 200) * tien150KwKe
    );
  } else {
    tongTien = Math.floor(
      50 * tien50KwDau +
        50 * tien50Kwtieptheo +
        100 * tien100KwKe +
        150 * tien150KwKe +
        (soKw - 350) * tienKwConLai
    );
  }

  ketQuaBai2 = tongTien;

  // Định dạng giá trị thành tiền tệ
  let ketQuaBai2Formatted = ketQuaBai2.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  // Hiển thị kết quả ra thẻ input
  document.getElementById("tenKhachHang").value = `Khách Hàng ${hoTen}`;
  document.getElementById(
    "soTienThanhToan"
  ).value = `Số tiền cần thanh toán là ${ketQuaBai2Formatted}`;
};

// bài 3
let thuNhap60 = 0.05;
let thuNhap120 = 0.1;
let thuNhap210 = 0.15;
let thuNhap384 = 0.2;
let thuNhap642 = 0.25;
let thuNhap960 = 0.3;
let thuNhapConLai = 0.35;
let tienThue = 0;

let ketQuaBai3 = document.getElementById("ketQuaBai3");
document.getElementById("btnBai3").onclick = function () {
  let hoTen = document.getElementById("hoTenBai3").value;
  let thuNhap = document.getElementById("thuNhap").value * 1;
  let ngPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  if (isNaN(ngPhuThuoc) || ngPhuThuoc == 0) {
    ngPhuThuoc = 1;
  } else {
    ngPhuThuoc *= 1600000;
  }
  // thu nhập dưới 60
  if (thuNhap <= 60000000) {
    tienThue = thuNhap * thuNhap60 - 4000000 - ngPhuThuoc;
    if (tienThue < 0) {
      tienThue = 0;
    }

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // thu nhập dưới 120
  else if (thuNhap > 60000000 && thuNhap <= 120000000) {
    tienThue = thuNhap * thuNhap120 - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // thu nhập dưới 210
  else if (thuNhap > 120000000 && thuNhap <= 210000000) {
    tienThue = thuNhap * thuNhap210 - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // thu nhập dưới 384
  else if (thuNhap > 210000000 && thuNhap <= 384000000) {
    tienThue = thuNhap * thuNhap384 - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // thu nhập dưới 642
  else if (thuNhap > 384000000 && thuNhap <= 642000000) {
    tienThue = thuNhap * thuNhap642 - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // thu nhập dưới 960
  else if (thuNhap > 642000000 && thuNhap <= 960000000) {
    tienThue = thuNhap * thuNhap960 - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
  // trên 960
  else if (thuNhap > 960000000) {
    tienThue = thuNhap * thuNhapConLai - 4000000 - ngPhuThuoc;

    let tienThueChuyenDoi = tienThue.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    ketQuaBai3.value = `Tiền thuế của ${hoTen} là ${tienThueChuyenDoi}`;
    return;
  }
};

// bài 4
let tienKenhDan = 7.5;
let tienKenhDoanhNghiep = 50;
let tienDichVuDan = 4.5 + 20.5;
let tienDichVuDoanhNghiep = 15 + 75;
let tongPhiDichVu = 0;
let ketQuaBai4 = document.getElementById("ketQuaBai4");
document.getElementById("khachHang").addEventListener("change", function () {
  let khachHang = this.value;
  let soKetNoiContainer = document.getElementById("soKetNoiContainer");

  if (khachHang === "doanhNghiep") {
    soKetNoiContainer.style.display = "block";
  } else {
    soKetNoiContainer.style.display = "none";
  }
});
function formatToUSD(amount) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

document.getElementById("xacNhanBai4").onclick = function () {
  let loaiKhachHang = document.getElementById("khachHang").value;
  let maKhachHang = document.getElementById("maKhachHang").value;
  let soKenh = document.getElementById("soKenhCaoCap").value * 1;
  let soKetNoi = document.getElementById("soKetNoi").value * 1;
  let formattedPhiDichVu = formatToUSD(tongPhiDichVu);
  switch (loaiKhachHang) {
    case "nhaDan":
      if (isNaN(soKenh) || soKenh < 1) {
        soKenh = 0;
      }
      tongPhiDichVu = tienDichVuDan + soKenh * tienKenhDan;
      ketQuaBai4.value = `Tiền cáp mã khách hàng ${maKhachHang} là ${formattedPhiDichVu}`;
      break;
    case "doanhNghiep":
      if (isNaN(soKenh)) {
        soKenh = 0;
      }
      if (isNaN(soKetNoi) || soKetNoi < 10) {
        soKetNoi = 0;
      }
      tongPhiDichVu =
        tienDichVuDoanhNghiep + soKenh * tienKenhDoanhNghiep + soKetNoi * 5;

      ketQuaBai4.value = `Tiền cáp mã khách hàng ${maKhachHang} là ${formattedPhiDichVu}`;
      break;
  }
};
