import postModel from "./post.model.js";

export const createPost = async (req, res) => {
  try {
    const { name, title, thumbnail, content } = req.body;

    const post = new postModel({ name, title, thumbnail, content });

    await post.save();

    res.status(200).json({
      post,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const findPosts = async (req, res) => {
  try {
    const posts = await postModel.find();
    res.status(200).json({
      posts,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const findPostByName = async (req, res) => {
  try {
    const postName = req.params.name;
    const postInfo = await postModel.findOne({ name: postName });

    res.status(200).json({
      postInfo,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const addcommentToPost = async (req, res) => {
  try {
    const { name, text } = req.body;
    const postName = req.params.name;

    const postInfo = await postModel.findOne({ name: postName });

    postInfo.comment.push({ name, text });

    await postInfo.save();

    res.status(200).json({
      postInfo,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};

export const getCommentsByPostName = async (req, res) => {
  try {
    const postName = req.params.name;
    const postInfo = await postModel.findOne({ name: postName });

    res.status(200).json({
      comments: postInfo.comment,
    });
  } catch (e) {
    res.status(500).json({
      message: e.message,
    });
  }
};
