const express = require('express');
const router = express.Router();
//require our mdb model
const Tee = require('../models/tees');

//get all
router.get('/', async (req, res) => {
    try {
        const tees = await Tee.find();
        res.json(tees);
    } catch (error) {
        //500 means OUR server error only
        res.status(500).json({ message: error.message })
    }
});

//get one
router.get('/:id', getId, (req, res) => {
    //returns json
    res.json(res.tee);
});

//create one
router.post('/', async (req, res) => {
    const tee = new Tee({
       title: req.body.title,
       description: req.body.description,
       artist: req.body.artist, 
    });
    try {
        const newTee = await tee.save();
        res.status(201).json(newTee);
    } catch (error) {
        //400 means user sent bad data
        res.status(400).json({ message: error.message });
    }
});

//update one
router.patch('/:id', getId, async (req, res) => {
    if(req.body.title != null){
        res.tee.title = req.body.title;
    }
    if(req.body.description != null){
        res.tee.description = req.body.description;
    }
    if(req.body.artist != null){
        res.tee.artist = req.body.artist;
    }
    //update only differences
    try {
        const updatedTee = await res.tee.save();
        res.json(updatedTee);
    } catch (error) {
        //400 means user passed bad data
        res.status(400).json({ message: error.message });
    }
});

//delete one
router.delete('/:id', getId, async (req, res) => {
    try {
        await res.tee.remove();
        res.json({ message: 'Deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//middleware we make that gets id for use in routes
async function getId(req, res, next){
    //empty variable to hold id, if found
    let tee;
    try {
        tee = await Tee.findById(req.params.id);
        if (tee == null){
            //if not found leave function immediatley
            return res.status(404).json({ message: 'Cannot find.'});
        }
    } catch (error) {
        //500 means OUR server error
        return res.status(500).json({ message: error.message });
    }
    //assign found id into variable, for use in routes above
    res.tee = tee;
    //moves on to processing next thing: the route
    next();
}

module.exports = router;