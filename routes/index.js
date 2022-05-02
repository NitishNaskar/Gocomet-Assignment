const express=require("express");
const router=express.Router();
const homeController=require("../controller/home_controller");
const webVisiterController=require("../controller/web_visiter");

router.get("/",homeController.home);
router.post("/web-visiter",webVisiterController.webvisiter);

module.exports=router;