import express from "express";

declare global {
  namespace Express {
    export interface Request {
        debugId: string
        ipAddress: string,
        device: string
    }
    
  }
  export interface Error {
    status?: number;
  }
}