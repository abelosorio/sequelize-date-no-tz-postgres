'use strict';

const inherits = require('./utils').inherits;
const getDataTypes = require('./utils').getDataTypes;
const getSequelize = require('./utils').getSequelize;

function withParentDateNoTz(DataTypesOrSequelize) {
  const DataTypes = getDataTypes(DataTypesOrSequelize);
  const Sequelize = getSequelize(DataTypesOrSequelize);

  function DATE_NO_TZ() {
    if (!(this instanceof DATE_NO_TZ)) return new DATE_NO_TZ(options);
  };
  inherits(DATE_NO_TZ, DataTypes.ABSTRACT);

  DATE_NO_TZ.key = 'DATE_NO_TZ';
  DATE_NO_TZ.prototype.toSql = function () {
    return 'TIMESTAMP';
  };

  DataTypes.DATE_NO_TZ = DATE_NO_TZ;

  if (Sequelize) {
    Sequelize.DataTypes = DataTypes;
    Sequelize.DATE_NO_TZ = DATE_NO_TZ;

    return Sequelize;
  }

  return DataTypes;
}

module.exports = withParentDateNoTz;
