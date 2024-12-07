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

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q)
        {
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(q);
        }

        //uncomment this to get the following console results
        //console.log(q);
};

//PUT: /trips/:tripCode - Adds a new Trip
//regardless of outcome, response must include HTML status code
//and JSON message to requesting client
const tripsUpdateTrip = async(req, res) => {

    //Debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            {'code':req.params.tripCode},
            {
                code:req.body.code,
                name:req.body.name,
                length:req.body.length,
                start:req.body.start,
                resort:req.body.resort,
                perPerson:req.body.perPerson,
                image:req.body.image,
                description:req.body.description
            }
        )
        .exec()

        if(!q)
            {//Database returned nothing
                return res
                    .status(400)
                    .json(err);
            } else {
                return res
                    .status(201)
                    .json(q);
            }

            //uncomment to show results
            //console.log(q);
        };

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};