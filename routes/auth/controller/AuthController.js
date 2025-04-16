const { User } = require("../../../models");

exports.validateUser = async (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).json({
      message: "Username dan Password tidak disertakan",
      responseCode: 400,
      success: false,
    });
  }

  try {
    const dataUser = await User.findOne({
      where: { username: username },
    });

    if (!dataUser) {
      return res.status(400).json({
        message: "Username tidak ditemukan",
        responseCode: 400,
        success: false,
      });
    }

    if (dataUser.password !== password) {
      return res.status(401).json({
        message: "Username atau Password tidak sesuai",
        responseCode: 401,
        success: false,
      });
    }

    res.status(200).json({
      message: "Authenticate Berhasil",
      responseCode: 200,
      success: true,
      data: dataUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Terjadi kesalahan pada server",
      responseCode: 500,
      success: false,
    });
  }
};

exports.register = async (req, res) => {
  const { username, password, telepon, alamat, nama, tipe_user } =
    req.body || {};
  if (!username || !password || !telepon || !alamat || !nama) {
    return res.status(400).json({
      message: "Register Gagal: Data tidak lengkap",
      responseCode: 400,
      success: false,
    });
  }

  const tipe_userNullabe = tipe_user || "user";

  const checkUser = await User.findOne({
    where: { username: username },
  });

  if (checkUser) {
    return res.status(400).json({
      message: "Register Gagal: Username sudah digunakan",
      responseCode: 400,
      success: false,
    });
  }

  const dataUser = await User.create({
    username,
    password,

    telepon,
    alamat,
    nama,
    tipe_user: tipe_userNullabe,
  });

  if (!dataUser) {
    return res.status(400).json({
      message: "Register Gagal: Kesalahan Tidak Di Ketahui",
      responseCode: 400,
      success: false,
    });
  }

  if (dataUser) {
    res.status(201).json({
      message: "Register Berhasil",
      responseCode: 201,
      success: true,
      data: dataUser,
    });
  }
  return res.status(400).json({
    message: "Register Gagal: Kesalahan Tidak Di Ketahui",
    responseCode: 400,
    success: false,
  });
};
