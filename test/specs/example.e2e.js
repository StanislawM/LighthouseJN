describe('JSON.org page', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })

    it('should load within performance budget', () => {
        /**
         * this page load will take a bit longer as the DevTools service will
         * capture all metrics in the background
         */
        browser.url('http://json.org')

        let metrics = browser.getMetrics()
        console.log(metrics) // check that speedIndex is below 1.5ms
    })

    after(() => {
        browser.disablePerformanceAudits()
    })
})