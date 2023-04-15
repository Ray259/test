let getHomePage = (req, res) => {
    // return res.send("Controller!");
    return res.render('homepage.ejs'); 
    //khong can goi duong dan vi trong file config da set views path
} //truyen request va respond cho express

// object: {
//     key: ''
//     value: ''
// }

let getAbout = (req, res) => {
    return res.render('test/about.ejs');
}
module.exports = {
    getHomePage: getHomePage,
    getAbout: getAbout,
}