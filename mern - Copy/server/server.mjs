import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";
import mass from "./routes/mass.mjs";
import temperature from "./routes/temperature.mjs";
import bin from "./routes/bin.mjs";
import color from "./routes/color.mjs";
import composition from "./routes/composition.mjs";
import pressure from "./routes/pressure.mjs"
import rainRate from "./routes/rainRate.mjs"
import randomNumber from "./routes/randomNumber.mjs"
import randomChar from "./routes/randomChar.mjs"
import time from "./routes/time.mjs"
import query from "./routes/complexQuery.mjs"

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/record", records);
app.use("/query", query);
app.use("/mass", mass);
app.use("/bin", bin);
app.use("/color", color);
app.use("/composition", composition);
app.use("/pressure", pressure);
app.use("/rainRate", rainRate);
app.use("/randomNumber", randomNumber);
app.use("/randomChar", randomChar);
app.use("/temperature", temperature);
app.use("/time", time);


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
