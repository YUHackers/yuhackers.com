var AWS = require('aws-sdk');
var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
var _ = require('lodash');

var tableName = "yuhackers_team";
exports.handler = function(event, context) {
  if(context.apiType) {
    docClient.put({
        "TableName" : tableName,
        "Key" : {
          "id": _.random(10000),
          "name": event.name,
          "pic": event.pic,
          "title":event.title

        }
    }, function(error, data) {
      context.done(error, data);
    });
  }
  else {
    docClient.scan({
      "TableName": tableName,
      "Query": {}
    }, function(err, data) {
        context.done(err, data);
    });
  }
}
