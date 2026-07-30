import express from "express";

const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.status(400).json({
        success: false,
        message: "server runn",
    });
});

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

export default app;