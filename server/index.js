const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mc = require('./controllers/messages_controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '../public/build'))

app.post('/api/messages',mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id',mc.delete);


app.listen(3000, () => {
    console.log('Server listening on port ' + 3000);
});