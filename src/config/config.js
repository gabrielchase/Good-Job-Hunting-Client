let config = {}
const nodeEnv = process.env.NODE_ENV || 'development'

console.log(`node environment: ${nodeEnv}`)
console.log(`./${nodeEnv}.json`)

try {
    let configFile = require(`./${nodeEnv}.json`)
    config.API_URL = process.env.API_URL || configFile.API_URL
} catch (err) {
    console.log(`Failed to load config file ./${nodeEnv}.json`, err.message)
    config = {} // And thus config will be empty so that the app will fail hard.
}

module.exports = config
