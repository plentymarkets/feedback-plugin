const keypair = require('keypair')
const rsaPemToJwk = require('rsa-pem-to-jwk')
const JWT = require('jsonwebtoken')

const fs = require('fs')
function writeToFile (payload) {
  const pair = keypair()
  const jwk = rsaPemToJwk(pair.public, { use: 'sig' }, 'public')

  fs.writeFileSync('/public/.well-known/jwks.json', jwk)
  return JWT.sign(payload, pair.private, { expiresIn: '30min' })
}

module.exports = writeToFile
