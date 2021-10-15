import express  from "express";
import RestaurantsController from "../controllers/restaurants";
import ReviewsController from "../controllers/reviews";
import authenticate from "../middleware/auth.js";

const router = express.Router();

//add more routes later
router.route("/").get(RestaurantsController.apiGetRestaurants)
router.route("/id/:id").get(RestaurantsController.apiGetRestaurantById)
router.route("/cuisines").get(RestaurantsController.apiGetRestaurantCuisines)

router
    .route("/review")
    .post(authenticate, ReviewsController.apiPostReview)
    .put(authenticate, ReviewsController.apiUpdateReview)
    .delete(authenticate, ReviewsController.apiDeleteReview)

export default router