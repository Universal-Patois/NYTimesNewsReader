describe('landing-page', () => {
  beforeEach(() => {
    cy.intercept('GET','https://api.nytimes.com/svc/topstories/v2/home.json?api-key=cVmfn2b50bqSPs6mKHWXkxYuGAqWN2y4', {
      fixture: "sample-articles.json"
    })
    .visit("http://localhost:3000")
  })

  it('should have a header, dropdown, and list of top stories on the landing page', () => {
    cy.get('.heading').contains('New York Times: News Reader')
    cy.get('#dropdown-topic-button').contains('Choose a Topic')
    cy.get(':nth-child(2) > center').contains('Subjects: Classified Information and State Secrets. Search and Seizure. United States Politics and Government.')
  })
}) 

describe('topic selection', () => {
  beforeEach(() => {
    beforeEach(() => {
      cy.intercept('GET','https://api.nytimes.com/svc/topstories/v2/home.json?api-key=cVmfn2b50bqSPs6mKHWXkxYuGAqWN2y4', {
        fixture: "sample-articles.json"
      })
      .visit("http://localhost:3000")
      cy.get('#dropdown-topic-button').click()
      cy.get('[value="automobiles"]').select()
      cy.intercept('GET','https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=cVmfn2b50bqSPs6mKHWXkxYuGAqWN2y4', {
        fixture: "auto-articles.json"
      })
      .visit("http://localhost:3000")
    })

    it('should be able to select a topic from dropdown and have articles from that topic populate', () => {
      cy.get(':nth-child(2) > center').click()
    })
  })
})