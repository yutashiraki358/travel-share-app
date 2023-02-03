import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import PostModel from "../models/post";

export const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await PostModel.find().exec();

    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

export const getPost: RequestHandler = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    if (!mongoose.isValidObjectId(postId)) {
      throw createHttpError(400, "無効な投稿IDです");
    }

    const post = await PostModel.findById(postId).exec();

    if (!post) {
      throw createHttpError(404, "投稿が見つかりません");
    }

    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

interface CreatePostBody {
  title?: string;
  location?: string;
  image?: string;
  text?: string;
}

export const createPost: RequestHandler<
  unknown,
  unknown,
  CreatePostBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const location = req.body.location;
  const image = req.body.image;
  const text = req.body.text;

  try {
    if (!title) {
      throw createHttpError(400, "投稿にはタイトルが必要です");
    }
    const newPost = await PostModel.create({
      title: title,
      location: location,
      image: image,
      text: text,
    });

    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

interface UpdatePostParams {
  postId: string;
}

interface UpdatePostBody {
  title?: string;
  location?: string;
  image?: string;
  text?: string;
}

export const updatePost: RequestHandler<
  UpdatePostParams,
  unknown,
  UpdatePostBody,
  unknown
> = async (req, res, next) => {
  const postId = req.params.postId;
  const newTitle = req.body.title;
  const newLocation = req.body.location;
  const newImage = req.body.image;
  const newText = req.body.text;

  try {
    if (!mongoose.isValidObjectId(postId)) {
      throw createHttpError(400, "無効な投稿IDです");
    }

    if (!newTitle) {
      throw createHttpError(400, "投稿にはタイトルが必要です");
    }

    const post = await PostModel.findById(postId).exec();

    if (!post) {
      throw createHttpError(404, "投稿が見つかりません");
    }

    post.title = newTitle;
    post.location = newLocation;
    post.image = newImage;
    post.text = newText;

    const updatePost = await post.save();

    res.status(200).json(updatePost);

    PostModel.findByIdAndUpdate();
  } catch (error) {
    next(error);
  }
};

export const deletePost: RequestHandler = async (req, res, next) => {
  const postId = req.params.postId;

  try {
    if (!mongoose.isValidObjectId(postId)) {
      throw createHttpError(400, "無効な投稿IDです");
    }

    const post = await PostModel.findById(postId).exec();

    if (!post) {
      throw createHttpError(404, "投稿が見つかりません");
    }

    await post.remove();

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
