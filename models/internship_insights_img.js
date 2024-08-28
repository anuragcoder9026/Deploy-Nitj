const mongoose = require('mongoose');

//Schema---------------------->
const Schema = new mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    show: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});


// Export----------------->
export const Model = mongoose.model('internship_stats_link', Schema);