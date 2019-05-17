var models  = require('../models');

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

async function destroy(req, res, next) {
    models.Company.destroy({ where: {id: req.params.id} })
        .then( () => {
            res.status(200).send('deleted successfully company with id : ' + req.params.id);
        });
}

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
