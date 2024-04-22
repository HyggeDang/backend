const app = require("./app");
const config = require("./app/config");
const NhanVien = require("./schemas/nhanvien.schema")
const bcrypt = require("./utils/bcrypt")

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/librarydb").then(async ()=>{
    const numberOfNhanVien = await NhanVien.countDocuments();
    if (numberOfNhanVien)
        return;
    const newNhanVien = await NhanVien.create({MSNV: "admin", 
        HoTenNV: "admin", 
        Password: bcrypt.hashPassword("admin"), 
        ChucVu: "Thủ Thư",
        DiaChi: "Cần Thơ",
        SoDienThoai: "0987654321"
    })
    console.log(newNhanVien);
});

const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});