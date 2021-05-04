var express = require('express');
var request = require("request");

var Researcher = require("../models/researcher")

var router = express.Router();

router.get('/', async (req, res, next) => {
    const researchers = await Researcher.find().limit(10)
    res.send(researchers)
});

router.get('/orcid_id/:orcid_id', async (req, res, next) => {
    try {
        const researcher = await Researcher.findOne({ orcid_id: req.params.orcid_id }).orFail();
        res.send(researcher)
    } catch {
        res.status(404)
        res.send({ error: "Researcher no existe" })
    }
});

module.exports = router;