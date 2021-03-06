import Promise from 'bluebird'
var requestPromise = Promise.promisifyAll(require('request'))

module.exports = {
  getAllApprovalPolicies: getAllApprovalPolicies,
  getApprovalPolicyById: getApprovalPolicyById,
  createApprovalPolicy: createApprovalPolicy,
  updateApprovalPolicy: updateApprovalPolicy
}

function getAllApprovalPolicies () {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options

    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/approval-service/api/policies`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function getApprovalPolicyById (id) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'GET',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/approval-service/api/policies/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      json: true
    }

    requestPromise.getAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function createApprovalPolicy (policyJson) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'POST',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/approval-service/api/policies`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: policyJson,
      json: true
    }

    requestPromise.postAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

function updateApprovalPolicy (id, policyJson) {
  var _this = this

  return new Promise(function (resolve, reject) {
    var options
    options = {
      method: 'PUT',
      agent: _this.config.agent,
      url: `https://${_this.config.hostname}/approval-service/api/policies/${id}`,
      headers: {
        'cache-control': 'no-cache',
        'authorization': `Bearer ${_this.config.token}`
      },
      body: policyJson,
      json: true
    }

    requestPromise.putAsync(options)
      .then(function (response) {
        return resolve(response)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
