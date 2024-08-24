const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares");

// CORS middleware
router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// Signup route
router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
  authController.signup
);

// Signin route
router.post("/signin", authController.signin);

module.exports = router;





// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/auth.controller");
// const { verifySignUp } = require("../middlewares");

// // Create a user Router
// // POST http://localhost:5000/api/v1/auth/singup
// router.use((req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });

// // Create router
// router.post(
//   "/signup",
//   [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
//   authController.signup
// );
// router.post("/signin", authController.signin);
// //router.post("/signup", authController.signup);

// module.exports = router;
