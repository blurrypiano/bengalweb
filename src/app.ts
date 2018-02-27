import * as express from "express";
import { Request, Response } from "express";

// Create Express server
const app = express();


// Express configuration
app.set("port", process.env.PORT || 3000);

app.get("/", (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
