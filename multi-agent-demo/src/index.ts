import "dotenv/config";
import { buildServer } from "./server.js";

const port = Number(process.env.PORT || 3000);
const host = "0.0.0.0";

const app = buildServer();

try {
  await app.listen({ port, host });
  console.log(`Multi-agent learning lab listening on http://${host}:${port}`);
} catch (err) {
  app.log.error(err);
  process.exit(1);
}
