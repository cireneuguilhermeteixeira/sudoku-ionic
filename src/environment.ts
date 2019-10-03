const defaultEnvironment = 'test'
const environment = {
  production: {
    apiUrl: 'https://sudokuic.herokuapp.com',
  },
  test: {
    apiUrl: 'http://localhost',
  }
}

export const environmentVars = environment[defaultEnvironment]