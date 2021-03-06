const express = require("express");
const router = express.Router();
const Management = require("../controllers/showtimesController");

router.get("/thongTinLichChieuPhim/:id", Management.getLCById);
router.get("/thongTinLichChieuRap/:id", Management.getLCByCluster);
router.get("/thongtinrap", Management.getTheater);

module.exports = router;
