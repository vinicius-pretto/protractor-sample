exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/wines.spec.js'],
  baseUrl: 'http://127.0.0.1:3000'
};