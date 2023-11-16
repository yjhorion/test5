import express from "express"
import router from "./routes/posts.router.js"


const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Server listen ${PORT}`)
});