const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
    const messages = await Message.findAll({ where: { receiver_id: req.user.id } });
    res.json(messages);
};

exports.sendMessage = async (req, res) => {
    const { receiver_id, content } = req.body;
    const message = await Message.create({
        sender_id: req.user.id,
        receiver_id,
        content,
    });
    res.status(201).json(message);
};
