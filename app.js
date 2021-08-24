// Imports
const express = require("express");
// Route imports
const homeRoutes = require("./routes/home");
const bollywoodRoutes = require("./routes/bollywood");
const hollywoodRoutes = require("./routes/hollywood");
const fitnessRoutes = require("./routes/fitness");
const foodRoutes = require("./routes/food");
const technologyRoutes = require("./routes/technology");
// Calling express method
const app = express();
// Port
const PORT = process.env.PORT || 5000;

// Routes
app.use("/", homeRoutes);
app.use("/api", bollywoodRoutes);
app.use("/api", hollywoodRoutes);
app.use("/api", fitnessRoutes);
app.use("/api", foodRoutes);
app.use("/api", technologyRoutes);

// Listening to port
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
})
