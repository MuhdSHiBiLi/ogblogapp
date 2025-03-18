const express = require("express");
const router = express.Router();
const posts = require("../src/model/post");
router.use(express.json());


//blog post
router.post("/add", async (req, res) => {
  try {
    const post = req.body;
    let newPost = await posts(post).save();
    res.status(200).json({ success: "post is added" });
    console.log(newPost);
  } catch (error) {}
});

//blog view
router.get("/view",  async (req, res) => {
  try {
    let post = await posts.find();
    res.status(200).json({data:post})
  } catch (error) {
    console.log(error.message);
  }
});

//blog delete
router.delete("/delete/:id", async(req,res)=>{
    try {
        const dltblog = await posts.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"post deletted"})
    } catch (error) {
        console.log(error.message);
    }
})

//blog update
router.put('/update/:id', async(req,res)=>{
    try {
        let up = await posts.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send({message:"data updated"})
    } catch (error) {
        console.log(error.message);
    }
})



module.exports = router;
