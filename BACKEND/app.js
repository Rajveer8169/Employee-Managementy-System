import express, { urlencoded } from "express"
import ConnectDb from "./src/config/db.config.js"
import getData from "./src/routes/getData.routes.js"
import dotenv from "dotenv"
import cors from "cors"
import auth from "./src/routes/auth.routes.js"
import dns from "dns"

dns.setServers([
  '1.1.1.1',
  '8.8.8.8'
])

dotenv.config()

const app = express()

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json())
app.use(urlencoded({extended:true}))

app.use("/employees", getData)
app.use("/auth",auth)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    ConnectDb();
    console.log(`Server is running on http://localhost:${PORT}`)
})