import app from "./index.js"
import { connectToDatabase } from "./config/database.js"


app.listen(process.env.PORT, async (error) => {
    if (error) {
        console.log("Server connection failed with error: ", error);
    } else {
        await connectToDatabase();
        console.log(`Server is running at ${process.env.BASE_URL}`);
    }
});