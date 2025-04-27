import app from "./src/app.js"
import Connect from "./src/db/db.js"
import config from "./src/config/config.js"


const port = config.PORT


app.listen(3000, () => {
  console.log(`Server running on port ${port}`);
  Connect()
});

