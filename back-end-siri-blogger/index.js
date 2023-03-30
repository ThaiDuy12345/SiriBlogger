"use strict";
//* import all packages
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const account_1 = __importDefault(require("./routes/account"));
const post_1 = __importDefault(require("./routes/post"));
const image_1 = __importDefault(require("./routes/image"));
dotenv_1.default.config();
//* settings up and configuration 
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200',
    methods: ["GET", "POST", "PUT", "DELETE"]
}));
app.use(express_1.default.json());
const port = 5000;
//* running the expressjs server
app.listen(port, () => {
    console.log(`Server running successfully at ${port}`);
});
app.get("/", (req, res) => {
    res.send("This is SiriBlogger backend server, its running successfully");
});
app.use("/api/account", account_1.default);
app.use("/api/post", post_1.default);
app.use("/api/image", image_1.default);
//* connect to mongodb
const uri = `mongodb+srv://${process.env.MGDBACCOUNT}:${process.env.MGDBPASSWORD}@cluster0.jsirxs0.mongodb.net/SiriBlogger?retryWrites=true&w=majority`;
mongoose_1.default.connect(uri);
