import db from '../models/index'
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
        return res.render('homepage.ejs');
    } catch (e) {
        console.log(e);
    }
}


let getAbout = (req, res) => {
    return res.render('test/about.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
}