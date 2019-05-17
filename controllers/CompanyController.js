async function findAll(req, res, next) {
    res.send('respond with all users');
}

async function findOne(req, res, next) {
    res.send('respond with a user');
}

async function update(req, res, next) {
    res.send('update a user');
}

async function destroy(req, res, next) {
    res.send('delete a user by id');
}

async function store(req, res, next) {
    res.send('save a new user');
}

module.exports = {
    findAll : findAll,
    findOne : findOne,
    update : update,
    destroy : destroy,
    store : store,
}
