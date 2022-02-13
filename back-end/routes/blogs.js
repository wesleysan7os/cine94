import express from "express";
import { readFile } from "fs/promises";

const blogs = JSON.parse(
  await readFile(new URL("../blog.json", import.meta.url))
);

const router = express.Router();

router.get("/", (req, res) => {
  res.send(blogs);
});

router.post("/", (req, res) => {
  const blog = req.body;
  blogs.push(blog);
});

export default router;
