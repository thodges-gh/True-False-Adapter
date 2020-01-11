const createRequest = (input, callback) => {
  if (JSON.parse(input.data.result) === false) {
    callback(200, {
      jobRunID: input.id,
      status: 'errored',
      error: 'Should error',
      statusCode: 200
    })
  } else {
    callback(200, {
      jobRunID: input.id,
      data: true,
      statusCode: 200
    })
  }
}

exports.gcpservice = (req, res) => {
  createRequest(req.body, (statusCode, data) => {
    res.status(statusCode).send(data)
  })
}

exports.handler = (event, context, callback) => {
  createRequest(event, (statusCode, data) => {
    callback(null, data)
  })
}

exports.handlerv2 = (event, context, callback) => {
  createRequest(JSON.parse(event.body), (statusCode, data) => {
    callback(null, {
      statusCode: statusCode,
      body: JSON.stringify(data),
      isBase64Encoded: false
    })
  })
}

module.exports.createRequest = createRequest
