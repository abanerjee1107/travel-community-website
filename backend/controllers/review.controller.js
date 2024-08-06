const db = require('../models');
const Review = db.review;

exports.createReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        res.send(review);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};
