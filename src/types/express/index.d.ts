import express from "express";

declare global {
  namespace Express {
    interface Request {
        debugId: string
        ipAddress: string,
        device: string
    }
  }
}