
describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url("https://scores24.live/ru");
        browser.pause(2000);
        expect(browser).toHaveTitle('Результаты матчей и прогнозы на спорт каждый день - Scores24')
    });
});