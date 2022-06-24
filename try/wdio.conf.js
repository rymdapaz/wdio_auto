exports.config = {
    
    specs: [
        './test/specs/**/*.js'
    ],

    suites: {
        test: [
            './test/specs/test.e2e.js'
        ]
    },

    
    exclude: [
        
    ],
    
    maxInstances: 10,
   

    capabilities: [{
    
        
        maxInstances: 1,
        
        browserName: 'chrome',
        acceptInsecureCerts: true
        
    }],
    
    logLevel: 'info',
    
    bail: 0,
   
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 1,
    
    services: ['chromedriver'],
    
    
    framework: 'jasmine',
    
    reporters: ['junit'],


    
   
    jasmineOpts: {
        defaultTimeoutInterval: 60000,
        expectationResultHandler: function(passed, assertion) {
            
        }
    },

}
