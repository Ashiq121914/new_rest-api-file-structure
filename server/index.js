import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import ratelimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODED,
  WEB_CACHE,
} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

//security apply
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());

// request size limit
app.use(express.json({ limit: MAX_JSON_SIZE }));

// url excode
app.use(express.urlencoded({ extended: URL_ENCODED }));

// request rate limit
const limiter = ratelimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// web cache
app.set("etag", WEB_CACHE);

// router setup
app.use("/api", router);

// app run
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
