import express from "express";
import { User } from "../model/user.model.js";
import jwt from "jsonwebtoken";
import { ApiError } from "../util/apiError.util.js";

const authenticator = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Invalid access token");
    }

    const verify = jwt.verify(token, process.env.accessToken);

    if (!verify) {
      throw new ApiError(401, "Incorrect access token");
    }

    const user = await User.findById(verify._id).select(
      "-password -refreshToken"
    );


    req.user = user; //updated user credentials so that, doesn't have to authenticate everytime.
    next();


  } catch (error) {
    res.send(400).json({
      success: false,
      message: "Unauthorised access",
    });
  }
});

export { authenticator };
