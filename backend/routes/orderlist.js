const express = require("express");

const {
  getOrders,
  getPlacedOrders,
  addCart,
  placeOrder,
  deleteCart,
  getPendingOrders,
  getOrderdOrders,
} = require("../controllers/orderlist");

const Orders = require("../models/Orderlist");

const router = express.Router({ mergeParams: true });

const advancedResults = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
  .get(
    advancedResults(Orders, {
      path: "product",
      select: "title price qty photo ",
    }),
    getOrders
  )
  .post(protect, authorize("user", "admin"), addCart);

router.route("/orders").get(getPlacedOrders);
router
  .route("/pending")
  .get(protect, authorize("user", "admin"), getPendingOrders);

router
  .route("/orders/:orderId")
  .put(protect, authorize("user", "admin"), placeOrder);

router
  .route("/:orderId")
  // .post(protect, authorize("public", "admin"), addOrder)
  // .put(protect, authorize("public", "admin"), updateOrder)
  .delete(protect, authorize("user", "admin"), deleteCart);

module.exports = router;
