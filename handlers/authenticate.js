const showHTML = (req,res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "authenticate", "authenticate.html"));
}

const register_post = (req,res) => {

}

const log_in_post = (req,res) => {

}

module.exports = {showHTML,register_post,log_in_post}

