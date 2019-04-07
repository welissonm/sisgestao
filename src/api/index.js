const Express = require('express');
const app = Express();
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello world!');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});