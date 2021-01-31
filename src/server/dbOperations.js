const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-west-2',
    endpoint: 'http://localhost:8000',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

function put(params) {
    return new Promise((resolve, reject) => {
        dynamodb.put(params, (err, data) => {
            if (err) {
                console.error(
                    'Unable to add the user',
                    JSON.stringify(err, null, 2),
                );
                return reject(err);
            } else {
                console.log('User added successfully');
                return resolve(data);
            }
        });
    });
}

function query(params) {
    return new Promise((resolve, reject) => {
        dynamodb.query(params, (err, data) => {
            if (err) {
                console.error('Unable to query', JSON.stringify(err, null, 2));
                return reject(err);
            } else {
                console.log('Queried data successfully');
                return resolve(data);
            }
        });
    });
}

function update(params) {
    return new Promise((resolve, reject) => {
        dynamodb.update(params, function (err, data) {
            if (err) {
                console.error(
                    'Unable to update the todo. Error JSON:',
                    JSON.stringify(err, null, 2),
                );
                return reject(err);
            } else {
                console.log(
                    'Updated the todo successfully:',
                    JSON.stringify(data, null, 2),
                );
                return resolve(data);
            }
        });
    });
}

function del(params) {
    return new Promise((resolve, reject) => {
        dynamodb.delete(params, (err, data) => {
            if (err) {
                console.error(
                    'Unable to delete the todo. Error JSON:',
                    JSON.stringify(err, null, 2),
                );
                return reject(err);
            } else {
                console.log('Deleted the todo succeessfully');
                return resolve(data);
            }
        });
    });
}

module.exports = {
    put,
    query,
    update,
    del,
};
