module.exports = (app) => {
    app.use("/user", require("./users.js"));
};