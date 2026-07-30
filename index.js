import express from "express";

const app =express();

app.use(express.json());

const PORT=5000;

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"server is run",
})
})

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

export default app;