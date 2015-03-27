/*jslint indent: 4, node: true, nomen:true */
exports.config = {
    baseUrl: 'http://www.raw.com.tw',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'cucumber',
    specs: [
        '../features'
    ],
    capabilities: {
        browserName: 'chrome',
        version: 'latest'
    },
    cucumberOpts: {
        require: '../step_definitions',
        format: 'pretty'
    }
};