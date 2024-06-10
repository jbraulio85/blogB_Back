import { Router } from "express";
import { check } from "express-validator";
import {
  createPost,
  findPosts,
  findPostByName,
  addcommentToPost,
  getCommentsByPostName,
} from "./post.controller.js";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();

router.post(
  "/createPost",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("title", "El título es obligatorio").not().isEmpty(),
    check("thumbnail", "Esta no es una url válida").isURL(),
    validarCampos,
  ],
  createPost
);

router.get("/posts", findPosts);

router.get("/posts/:name", findPostByName);

router.post(
  "/posts/:name/add-comments",
  [
    check("name", "No puedes publicar de manera anónima").not().isEmpty(),
    check("text", "No hay contenido para agregar al comentario")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  addcommentToPost
);

router.get("/posts/:name/comments", getCommentsByPostName)

export default router;  
