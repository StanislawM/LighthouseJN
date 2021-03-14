
describe('My Login application', () => {
    before(() => {
        browser.enablePerformanceAudits()
    })
    it('should login with valid credentials', () => {
        browser.url("https://scores24.live/ru");
        let metrics = browser.getMetrics()
        console.log(metrics)
    });
    after(() => {
        browser.disablePerformanceAudits()
    })
});