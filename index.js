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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

export default app;