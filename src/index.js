'use strict';

const withParentDateNoTz = require('./with_parent_date_no_tz');
const withPostgresDateNoTz = require('./with_postgres_date_no_tz');

module.exports = function (DataTypes) {
  return withPostgresDateNoTz(
    withParentDateNoTz(DataTypes)
  );
};
