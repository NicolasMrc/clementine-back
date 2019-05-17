var models  = require('../models');

async function findAll(req, res, next) {
    models.Company.findAll({
        include: [{
            model: models.User,
            as: 'users',
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

module.exports = {
    findAll : findAll,
    findOne : findOne,
    update : update,
    destroy : destroy,
    store : store,
}
