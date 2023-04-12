import { app } from "./app";
import appDataSource from "./data-source";

(async () => {
  await appDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
})();
