import express from "express";
import multer from "multer";
import { readFile } from "fs/promises";

const posts = JSON.parse(
  await readFile(new URL("../posts.json", import.meta.url))
);

const router = express.Router();
const upload = multer({
  limits: {
    fileSize: 1000000, //filesize restriction to 1Megabyte
  },
  //file type restriction
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new Error("Please upload an image."));
    }
    cb(undefined, true);
  },
});

router.get("/", (req, res) => {
  res.send(posts);
});

router.get("/posts/:id", (req, res) => {
  const id  = req.params.id;
  res.send(posts.find(post => post.id === parseInt(id)));
});

router.get("/posts/:id/image", async (req, res) => {
  try {
    const id = req.params.id;
    const incident = posts.find((post) => post.id === parseInt(id));
    
    if (!incident || !incident.image) {
      throw new Error();
    }
    //response header, use set
    res.set("Content-Type", "image/png");
    res.send(incident.image);
  } catch (e) {
    res.status(404).send();
  }
});

router.post(
  "/upload",
  upload.single("upload"),
  async (req, res) => {
    try {
      const incident = await Incident.findById(req.body.id);
      incident.image = req.file.buffer;
      incident.save();
      res.send();
    } catch (e) {
      res.status(400).send(e);
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);


router.post("/", (req, res) => {
  const blog = req.body;
  posts.push(blog);
});

export default router;
