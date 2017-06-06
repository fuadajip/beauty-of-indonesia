let destinationModel = require('../models/destinations');
var multer = require('multer')
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/uploads/');
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now() + '.png');
    }
});
var upload = multer({ storage: storage }).single('destinationPhoto');


var destinationController = {
    addDestination: (req, res, next) => {
        // upload(req, res, (err) => {
        //     if (err) {
        //         res.send("Error uploading file.");
        //         throw err;
        //     }
        // });

        // var path = req.file.destination + req.file.filename;
        // console.log(path);
        let dataDestination = new destinationModel({
            name: req.body.name,
            type: req.body.type,
            province: req.body.province,
            loc: req.body.loc,
            image: req.body.file,
            desc: req.body.desc
        });
        dataDestination.save((err, data) => {
            if (err) throw err;
            res.json({ success: true, msg: data });
        });
    },
    getAll: (req, res, next) => {
        destinationModel.find((err, dataDestination) => {
            if (err) throw err;
            res.json(dataDestination);
        });
    }
}

module.exports = destinationController;