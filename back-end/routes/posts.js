import express from "express";
import { readFile } from "fs/promises";

const posts = JSON.parse(
  await readFile(new URL("../posts.json", import.meta.url))
);

const router = express.Router();

router.get("/", (req, res) => {
  res.send(posts);
});

router.post("/", (req, res) => {
  const blog = req.body;
  posts.push(blog);
});

export default router;
