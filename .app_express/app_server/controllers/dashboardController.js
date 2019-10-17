//get index
const dashboard = (req, res) => {
    res.render("dashboard", { title: "Dashboard", userProfile: { nickname: "Dan"} });
};

const cash = (req, res) => {
    res.send("cash page");
}

module.exports = {
    dashboard,
    cash
};
