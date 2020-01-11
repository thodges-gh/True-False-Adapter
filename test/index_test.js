const assert = require('chai').assert
const createRequest = require('../index.js').createRequest

describe('createRequest', () => {
  const jobID = '278c97ffadb54a5bbb93cfec5f7b5503'

  context('when sending in true as a string', () => {
    const req = {
      id: jobID,
      data: {
        result: 'true'
      }
    }

    it('returns true', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isTrue(data.data)
        done()
      })
    })
  })

  context('when sending in true as value', () => {
    const req = {
      id: jobID,
      data: {
        result: true
      }
    }

    it('returns true', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isTrue(data.data)
        done()
      })
    })
  })

  context('when sending in any value', () => {
    const req = {
      id: jobID,
      data: {
        result: 123
      }
    }

    it('returns true', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.isTrue(data.data)
        done()
      })
    })
  })

  context('when sending in false as a string', () => {
    const req = {
      id: jobID,
      data: {
        result: 'false'
      }
    }

    it('returns an error', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.equal(data.error, 'Should error')
        done()
      })
    })
  })

  context('when sending in false as value', () => {
    const req = {
      id: jobID,
      data: {
        result: false
      }
    }

    it('returns an error', (done) => {
      createRequest(req, (statusCode, data) => {
        assert.equal(statusCode, 200)
        assert.equal(data.jobRunID, jobID)
        assert.equal(data.error, 'Should error')
        done()
      })
    })
  })
})
