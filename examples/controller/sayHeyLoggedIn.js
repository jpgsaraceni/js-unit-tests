export default (req, res) => {
    if (req.user.isLoggedIn()) {
        return res.send("Hey")
    }
    res.send("Oops. You need to be logged in to see thid page.")
}