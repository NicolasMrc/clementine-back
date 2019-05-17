'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.belongsToMany(models.User, {
      through: 'GroupUser',
      as: 'users',
      foreignKey: 'companyId'
    });
  };
  return Company;
};
