const express = require('express');
const router = express.Router();
//require our mdb model
const Tee = require('../models/tees');

//get all tees for home/index
router.get('/', async (req, res) => {
    try {
        const tees = await Tee.find();
        res.json(tees);
    } catch (error) {
        //500 means OUR server error only
        res.status(500).json({ message: error.message })
    }
});

//details one tee for details page
router.get('/details/:id', getId, (req, res) => {
    //returns json
    console.log("get request from server", res.tee);
    res.status(200).json(res.tee);
});

//create tee
router.post('/create', async (req, res) => {
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

//get one tee to populate update/edit page
router.get('/update/:id', getId, (req, res) => {
    //returns json
    console.log("get request from server", res.tee);
    res.status(200).json(res.tee);
});

//update one
router.post('/update/:id', getId, async (req, res) => {
    console.log("this is the post by id obj ", res.tee);
    console.log("this is the post by id obj req tee title ", req.body.newTitle);

    if(req.body.newTitle != null){
        res.tee.title = req.body.newTitle;
    }
    if(req.body.newDescription != null){
        res.tee.description = req.body.newDescription;
    }
    if(req.body.newArtist != null){
        res.tee.artist = req.body.newArtist;
    }
    if(req.body.newImage != null){
        res.tee.image = req.body.newImage;
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
router.get('/delete/:id', getId, async (req, res) => {
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
    // console.log("get id helper ", req.params.id);
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
    // console.log('res.tee is ', res.tee);
    //moves on to processing next thing: the route
    next();
}

module.exports = router;