const {
  ListTablesCommand,
  DynamoDBClient,
} = require('@aws-sdk/client-dynamodb')

const clientDB = new DynamoDBClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
})

exports.getUsers = async (event) => {
  const command = new ListTablesCommand({
    // ExclusiveStartTableName: 'usersTable',
  })

  const response = await clientDB.send(command)
  console.log(response.TableNames.join('\n'))

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `responses:${JSON.stringify(response)}`,
    }),
  }
}
