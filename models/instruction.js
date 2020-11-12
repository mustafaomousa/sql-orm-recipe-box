'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: DataTypes.TEXT
  }, {});
  Instruction.associate = function (models) {
    Instruction.belongsTo(models.Recipe, { foreignKey: 'recipeId' })
  };
  return Instruction;
};