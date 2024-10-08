const Member = require('../models/Member');

exports.getMembers = async (req, res) => {
    const members = await Member.findAll();
    res.json(members);
};

exports.createMember = async (req, res) => {
    const { destination, budget, currency, language } = req.body;
    const member = await Member.create({
        user_id: req.user.id,
        destination,
        budget,
        currency,
        language,
    });
    res.status(201).json(member);
};
