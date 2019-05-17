var models  = require('../models');

/**
 * Find all companies
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function findAll(req, res, next) {
    models.Company.findAll({
        include: [{
            model: models.User,
            as: 'users',
            attributes: ['id', 'username'],
            through: { attributes: [] }
        }]
    }).then(companies => {
        res.send(companies)
    });
}

/**
 * find One Company by id
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function findOne(req, res, next) {
    models.Company.findByPk(req.params.id)
        .then(company => {
            if(company !== null){
                res.send(company)
            } else {
                res.status(404).send('No company found for id : ' + id)
            }
        });
}

/**
 * update an existing company
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function update(req, res, next) {
    let name = req.body.name
    if(name !== undefined && name.trim() !== ''){
        models.Company.update(
            {
                name: name,
            },
            {
                where: {id: req.params.id},
            }).then( () => {
            res.status(200).send('updated successfully company with id : ' + req.params.id)
        });
    } else {
        res.status(500).send('No name provided')
    }
}

/**
 * delete an existing company
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function destroy(req, res, next) {
    models.Company.destroy({ where: {id: req.params.id} })
        .then( () => {
            res.status(200).send('deleted successfully company with id : ' + req.params.id);
        });
}

/**
 * store a new company
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function store(req, res, next) {
    let name = req.body.name
    if(name !== undefined && name.trim() !== ''){
        models.Company.create({
            name: name,
        }).then(company => {
            res.send(company);
        });
    } else {
        res.status(500).send('No name provided')
    }
}

/**
 * Add an existing user to an existing company
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */
async function addUser(req, res, next) {

    let userId = req.params.user_id
    let companyId = req.params.company_id

    models.Company.findByPk(companyId).then(company => {
        if(company !== null){
            models.User.findByPk(userId).then(user => {
                if(user !== null){
                    company.addUser(user);
                    res.send(user.username + ' has been added to company ' + company.name)
                } else {
                    res.status(404).send('No user found for id : ' + userId)
                }
            })
        } else {
            res.status(404).send('No company found for id : ' + companyId)
        }
    });
}

module.exports = {
    findAll : findAll,
    findOne : findOne,
    update : update,
    destroy : destroy,
    store : store,
    addUser : addUser,
}
