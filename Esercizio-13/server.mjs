import app from "./app.mjs";
import "dotenv/config";

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`il server è partito sulla porta: ${port}`);
});
