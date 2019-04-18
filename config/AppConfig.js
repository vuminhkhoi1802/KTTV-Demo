import { Constants } from 'expo'

const ENV = {
  dev: {
    apiUrl: 'http://192.168.100.88:8000/api',
    providerId: 20,
    versionSuffix: ' dev'
  }
}

function getEnvVars (env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev
  if (env.indexOf('dev') !== -1) return ENV.dev
  return ENV.dev
}

const AppConfig = getEnvVars(Constants.manifest.releaseChannel)
export default AppConfig
