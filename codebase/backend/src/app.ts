import express, { Express, Request, Response } from "express";
import cors from "cors";
import routes from "./Api/Routes";
import { ROUTES, setRateLimit } from "./Configs";

const app: Express = express();

// TODO: set rate limit based on public or private routes
const max_request: number = process.env.PUBLIC_ROUTE_RATE_LIMIT_MAX_REQEUST
  ? parseInt(process.env.PUBLIC_ROUTE_RATE_LIMIT_MAX_REQEUST)
  : 0;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(setRateLimit(max_request));

app.get("/", (req: Request, res: Response) => {
  try {
    const message = "API is working very fine!!!";

    res.status(200).json({ message: message });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Routes config
app.use(ROUTES.apiV1, routes);

export { app };
