import express from "express";

const authenticator = async (req, res, next) => {
  try {
     
  } catch (error) {
    res.send(400).json({
      success: false,
      message: "Unauthorised access",
    });
  }
};

export { authenticator };
