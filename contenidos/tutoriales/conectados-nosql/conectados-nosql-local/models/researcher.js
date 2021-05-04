var mongoose = require('mongoose');

const researcherSchema = new mongoose.Schema({
    orcid_id: {
        type: String,
        unique: true,
        required: true,
    },
    phd_year: {
        type: String
    },
    country_2016: {
        type: String,
    },
    earliest_year: {
        type: String,
    },
    earliest_country: {
        type: String,
    },
    has_phd: {
        type: String
    },
    phd_country: {
        type: String,
    },
    has_migrated: {
        type: String
    }
});

module.exports = mongoose.model('researcher', researcherSchema);