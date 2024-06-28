const express=require("express");
const router=express.Router();
const authcontroller=require("../controllers/auth-controller")
const signupSchema=require("../validator/auth-validator")
const validate=require("../middleware/validate");
const authMiddleware=require("../middleware/auth-middleware");

router.route("/").get(authcontroller.home);
router.route("/signup").post(validate(signupSchema),authcontroller.register);
router.route("/signin").post(authcontroller.login);

router.route("/user").get(authMiddleware,authcontroller.user);
module.exports=router;