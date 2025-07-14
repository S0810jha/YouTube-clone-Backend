import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config()

connectDB()
.than(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is ruuning on port${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("database connection error !!", err);
})
