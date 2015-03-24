/*jslint indent: 4, node: true, nomen:true */
exports.config = {
    baseUrl: 'http://www.raw.com.tw',
    seleniumAddress: 'http://10.82.62.25:4444/wd/hub',
    framework: 'cucumber',
    specs: [
        '../features'
    ],
    capabilities: {
        browserName: 'firefox',
        version: 'latest'
    },
    cucumberOpts: {
        require: '../step_definitions',
        format: 'pretty'
    }
};