import request from "supertest";
import app from "./index.js";

try {
  const res = await request(app).get("/");

  if (
    res.status === 200 &&
    res.body.success === true &&
    res.body.message === "server is running"
  ) {
    console.log("✅ Smoke Test Pass");
    process.exit(0);
  } else {
    console.log("❌ Smoke Test Failed");
    console.log(res.body);
    process.exit(1);
  }
} catch (err) {
  console.error("❌ Smoke Test Failed");
  console.error(err);
  process.exit(1);
}