import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
import variables from './env_variables.json';

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'firefox',
      url: variables.apiBaseUrl,
      show: true,
      recordHar: {
          mode: 'minimal',
          content: 'embed'
      }
    },
    REST: {
      endpoint: "sso-api.acceptance.k8s.hrblizz.dev",
      prettyPrintJson: true
    },
    // .. add JSONResponse helper here
    JSONResponse: {
      requestHelper: 'GraphQL'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'mercans'
}