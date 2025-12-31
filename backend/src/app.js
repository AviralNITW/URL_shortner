// 1. Third-party packages
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// 2. Config
import connectDB from "./configs/db.config.js";

// 3. Routes
import auth_route from "./routes/auth.route.js";
import url_route from "./routes/url.route.js";
import redirector_route from "./routes/redirector.route.js";

// 4. Utils
import { errorHandler } from "./utils/error_handler.util.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: process.env.LIMIT }));
app.use(urlencoded({ extended: true, limit: process.env.LIMIT }));

// CORS configuration - allow GitHub Pages origin
const allowedOrigins = [
  process.env.CLIENT_URL,
  'https://aviralnitw.github.io',
  'http://localhost:5173',
].filter(Boolean);

// Handle preflight requests
app.options('*', cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.some(allowedOrigin => origin.startsWith(allowedOrigin))) {
      callback(null, true);
    } else {
      callback(null, true); // Allow all for now to debug
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
}));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Check if origin matches any allowed origin
      const isAllowed = allowedOrigins.some(allowedOrigin => {
        return origin === allowedOrigin || origin.startsWith(allowedOrigin);
      });
      
      if (isAllowed) {
        callback(null, true);
      } else {
        // For debugging, allow all origins temporarily
        console.log('CORS: Allowing origin:', origin);
        callback(null, true);
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
    exposedHeaders: ['Set-Cookie'],
  })
);

app.use(cookieParser());

// connection to database before starting the services
connectDB();

app.use("/api/v1/auth", auth_route);

app.use("/api/v1/url", url_route);

app.use("/", redirector_route);

app.use(errorHandler);

// Export app for Vercel serverless functions
export default app;

// Only start server if not in Vercel environment
// Vercel sets VERCEL=1 automatically
if (!process.env.VERCEL) {
  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log("Server is running on port : ", port);
  });
}
