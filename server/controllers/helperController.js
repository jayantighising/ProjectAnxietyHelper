



/**
 * GET/
 * Homepage
 */

exports.homepage = async(req, res) => {
    res.render('index', {title: 'Anxiety Helper -Home'});
}

exports.ventpage = async(req, res) => {
    res.render('vent', {title: 'Anxiety Helper -Home'});
}