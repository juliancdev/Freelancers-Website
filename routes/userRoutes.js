const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

// Users handlers

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/saveUser", authController.saveUser);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

// Will protect all the routes that comes after this point. that's because middleware runs in sequence

router.use(authController.protect);
router.patch("/updateMyPassword", authController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);
router.patch("/updateMe", userController.updateMe);
router.delete("/deleteMe", userController.deleteMe);

// Will restrict all the routes that comes after this point only to 'admin'

router.use(authController.restrictTo("admin"));
router.post("/createAdmin", authController.createAdmin);
router.get("/getUsersList", userController.getUsersList);
router.get("/getUsersCompletedList", userController.getUsersCompletedList);
router.get("/getUsersUncompletedList", userController.getUsersUncompletedList);

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
