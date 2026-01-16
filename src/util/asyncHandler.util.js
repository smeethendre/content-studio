// req, res, next try catch express

import express from "express";
import { json } from "express";

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.send(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandler };
