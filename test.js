import express from "express";

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "server running",
    });
});

// Removed app.listen since it's not needed in test files
// app.listen(PORT, () => {
//     console.log(`app is listening on port ${PORT}`);
// });

export default app;
