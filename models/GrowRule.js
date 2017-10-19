
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GrowRuleSchema = new Schema({

  poNum: {
    type: String,
    required: true
  },

  date: {
    type: String,
    required: true
  },

  strainName: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  licenseNum: {
    type: String,
    required: true
  }

});

var GrowRuleSchema = mongoose.model('GrowRule', GrowRuleSchema);

module.exports = GrowRuleSchema;
