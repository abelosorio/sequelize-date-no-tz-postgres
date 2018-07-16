'use strict';

const inherits = require('./utils').inherits;
const getDataTypes = require('./utils').getDataTypes;
const getSequelize = require('./utils').getSequelize;

function withPostgresDateNoTz(DataTypesOrSequelize) {
  const DataTypes = getDataTypes(DataTypesOrSequelize);
  const Sequelize = getSequelize(DataTypesOrSequelize);

  function DATE_NO_TZ(options) {
    if (!(this instanceof DATE_NO_TZ)) return new DATE_NO_TZ(options);
  };
  inherits(DATE_NO_TZ, DataTypes.DATE_NO_TZ);

  DATE_NO_TZ.prototype.parse = function(value) {
    return value;
  };

  DataTypes.postgres.DATE_NO_TZ = DATE_NO_TZ;

  // T_interval
  DataTypes.DATE_NO_TZ.types.postgres = {
    oids: [1114],
    array_oids: [1115]
  };

  if (Sequelize) {
    Sequelize.DataTypes = DataTypes;

    return Sequelize;
  }

  return DataTypes;
}

module.exports = withPostgresDateNoTz;
