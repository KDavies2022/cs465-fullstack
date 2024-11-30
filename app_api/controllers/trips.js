const mongoose = require ('mongoose');
const Trip = require ('../models/travlr'); //Register Model
const Model = mongoose.model('trips');

//GET: /trips - list all trips
//regardless of outcome, response must include HTML Status Code
//and JSON message to the requesting client
const tripsList = async (req, res) => {
    const q = await Model
        .find ({}) //no filter, return all records
        .exec();

        //uncomment the following line ot show the results of query
        //on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);

    } else { // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }
};

//GET: /trips/:tripCode - list a single trip
//regardless of outcome, response must include HTML Status Code
//and JSON message to the requesting client
const tripsFindByCode= async (req, res) => {
    const q = await Model
        .find ({'code' : req.params.tripCode}) //no filter, return all records
        .exec();

        //uncomment the following line ot show the results of query
        //on the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);

    } else { // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};