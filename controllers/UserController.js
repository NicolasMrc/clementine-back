var models  = require('../models');

/**
 * find all user
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function findAll(req, res, next) {
    models.User.findAll({
        include: [{
            model: models.Company,
            as: 'companies',
            attributes: ['id', 'name'],
            through: { attributes: [] }
        }]
    }).then(users => {
        res.send(users)
    });
}

/**
 * find one user by id
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function findOne(req, res, next) {
    models.User.findByPk(req.params.id)
        .then(user => {
            if(user !== null){
                res.send(user)
            } else {
                res.status(404).send('No user found for id : ' + id)
            }
        });
}

/**
 * update one user by id
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function update(req, res, next) {
    let username = req.body.username
    if(username !== undefined && username.trim() !== ''){
        models.User.update(
            {
                username: username,
            },
            {
                where: {id: req.params.id},
            }).then(user => {
            res.status(200).send('updated successfully user with id : ' + req.params.id)
        });
    } else {
        res.status(500).send('No username provided')
    }
}

/**
 * delete a user by id
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function destroy(req, res, next) {
    models.User.destroy({ where: {id: req.params.id} })
        .then( () => {
            res.status(200).send('deleted successfully user with id : ' + req.params.id);
        });
}

/**
 * store a new user
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function store(req, res, next) {
    let username = req.body.username
    if(username !== undefined && username.trim() !== ''){
        models.User.create({
            username: username,
        }).then(user => {
            res.send(user);
        });
    } else {
        res.status(500).send('No username provided')
    }
}

module.exports = {
    findAll : findAll,
    findOne : findOne,
    update : update,
    destroy : destroy,
    store : store,
}
