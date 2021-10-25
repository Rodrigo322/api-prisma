import { Router } from "express";

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

const router = Router();

router.post("/user", UserController.createUser);
router.get("/users", UserController.findAllUsers);
router.get("/user/:id", UserController.findUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);


router.post("/post/user/:id", PostController.craetePost);
router.get("/posts", PostController.FindAllPosts);
router.put("/post/:id", PostController.UpdatePost);


export { router };
