describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should visit the website', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Should show a home page with a title', () => {
    cy.get('h1').contains('NEW YORK TIMES')
    .get('h2').contains('News Reader')
  })

  it('Should show article cards with images, titles and dates', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BPtsHM1ArKr3MPNGGZBWlAoPoOTG8y27', {fixture: 'articles.json'})
    .get('h3').first().contains('The World’s Democracies Ask: Why Can’t America Fix Itself?')
    .get('.article-date').contains('1/08/2022')
    .get('.card-image').should('have.attr', 'src')
  })

  it('Should show an error message if response is not okay', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BPtsHM1ArKr3MPNGGZBWlAoPoOTG8y27',
    },
    {
      statusCode: 401,
      body: {
        message: 'Error loading news articles, please try again!'
      }
    })
  })

  it('Should be able to click on an article to view more details', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BPtsHM1ArKr3MPNGGZBWlAoPoOTG8y27', {fixture: 'articles.json'})
    .get('.card-image').first().click()
    .url().should('include', '/2022-11-08T07:10:06-05:00')
    .get('.article-title').contains('The World’s Democracies Ask: Why Can’t America Fix Itself?')
    .get('.description').should('include', 'Conversations across continents reveal alarm over the United States’ direction, as it slides away from ideals it once pressed other nations to adopt.')


  })
})