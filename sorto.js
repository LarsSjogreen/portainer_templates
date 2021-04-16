const _ = require('lodash');
const templates = require('./Template/template.json');

const result = { "version": 2, templates: [] };
result.templates = _.sortBy(templates, 'name');
console.log(JSON.stringify(result, 0, 2));