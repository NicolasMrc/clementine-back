'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.belongsToMany(models.Company, {
      through: 'GroupUser',
      as: 'companies',
      foreignKey: 'userId'
    });
  };

  return User;
};
