# sequelize-date-no-tz-postgres

[![NPM version](https://img.shields.io/npm/v/sequelize-date-no-tz-postgres.svg)](https://www.npmjs.com/package/sequelize-date-no-tz-postgres)

Add support for **DATE** (timestamp without time zone) data-type for **PostgreSQL** in **Sequelize**.

## Motivation

Read:
-   https://github.com/sequelize/sequelize/issues/2572

## Install

```bash
npm install --save sequelize-date-no-tz-postgres
```

## Use to define models

`models/my_model.js`
```javascript
const withDateNoTz = require('sequelize-date-no-tz-postgres');

module.exports = function (sequelize, SequelizeDataTypes) {
  const DataTypes = withDateNoTz(SequelizeDataTypes);

  const MyModel = sequelize.define('myModel', {
    someDateWithoutTzField: {
      type: DataTypes.DATE_NO_TZ
    },

    // ...
  });

  // ...

  return MyModel;
};
```

## Use in migrations

`migrations/<timestamp>-add-some-date-field-to-my-model.js`
```javascript
const withDateNoTz = require('sequelize-date-no-tz-postgres');

module.exports = {
  up: function (queryInterface, SequelizeBase) {
    const Sequelize = withDateNoTz(SequelizeBase);

    return queryInterface.addColumn('myModel', 'someDateWithoutTzField', {
      type: Sequelize.DATE_NO_TZ
    });
  },

  // ...
};
```
