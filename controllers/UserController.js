async function findAll(req, res, next) {
    res.send('respond with all users');
    return next()
}

async function findOne(req, res, next) {
    res.send('respond with a user');
    return next()
}

async function update(req, res, next) {
    res.send('update a user');
    return next()
}

async function destroy(req, res, next) {
    res.send('delete a user by id');
    return next()
}

async function store(req, res, next) {
    res.send('save a new user');
    return next()
}

module.exports = {
    findAll : findAll,
    findOne : findOne,
    update : update,
    destroy : destroy,
    store : store,
}
