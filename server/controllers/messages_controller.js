const messages = [];
let id = 0;

module.exports = {
    create(req,res){
        messages.push({
            id: id,
            text: req.body.text,
            time: req.body.time
        });
        id++
        res.json(messages)
    },
    read(req,res){
        res.json(messages);
    },
    update(req,res){
        const messageId = req.params.id;
        const messageIndex = messages.findIndex(message => messageId === +messageIndex);
        messages[messageIndex] = {
            text: req.body.text
        }
        res.json(messages)
    },
    delete(req,res){
        const messageId = req.params.id;
        const messageIndex = messages.findIndex(message => messageId === +messageIndex);
        messages.splice(messageIndex,1)
        res.json(messages)
    }
};