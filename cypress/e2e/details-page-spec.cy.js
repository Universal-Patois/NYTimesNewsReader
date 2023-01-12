describe('details page', () => {
  beforeEach(() => {
    cy.intercept('GET','https://api.nytimes.com/svc/topstories/v2/home.json?api-key=cVmfn2b50bqSPs6mKHWXkxYuGAqWN2y4', {
      fixture: "sample-articles.json"
    })
    .visit("http://localhost:3000")
    cy.get(':nth-child(2) > center > a > .article-title').click()
  })

  it('should have a image, title, abstract, authors, update/publish dates, back/read article button', () => {
    cy.get('img').should('be.visible')
    cy.get('h2.article-text').contains('How Biden’s Discovery of Classified Files Compares With the Trump Case')
    cy.get('h3.article-text').contains('The Justice Department is scrutinizing how both presidents came to have classified records after they left office. But there are major differences.')
    cy.get('center > :nth-child(4)').contains('By Charlie Savage')
    cy.get('[href="https://www.nytimes.com/2023/01/10/us/politics/trump-biden-classified-documents.html"] > .article-button').contains('Read the full article')
    cy.get('center > :nth-child(6)').contains('Last Updated: January-12-2023')
    cy.get('center > :nth-child(7)').contains('Published: January-10-2023')
    cy.get('[href="/"] > .article-button').contains('Back')
  })

  it('should take the user to the NY Times webpage when read article button is clicked', () => {
    cy.get('[href="https://www.nytimes.com/2023/01/10/us/politics/trump-biden-classified-documents.html"] > .article-button')
    .invoke('removeAttr', 'target')
  })

  it('should take the user back to the landing page when the back button is clicked', () => {
    cy.get('[href="/"] > .article-button').click()
    cy.get(':nth-child(2) > center > a > .article-title').contains('How Biden’s Discovery of Classified Files Compares With the Trump Case')
  })
})