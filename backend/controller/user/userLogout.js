async function userLogout(req,res) {
    try {
        res.clearCookie("token")

        res.json({
            message:"Logged out succefully",
            error : false,
            success: true,
            data :[]

        })
    } catch (error) {
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
}
module.exports = userLogout