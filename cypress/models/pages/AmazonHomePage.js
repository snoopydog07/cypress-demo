const SEARCH_INPUT = "#twotabsearchtextbox"
const SEARCH_BTN = "#nav-search-submit-button"

class AmazonHomePage {

  get searchTextElement() {
      return cy.get(SEARCH_INPUT) 
  }
  
  get searchBtnElement() {
      return cy.get(SEARCH_BTN)
  }

}

module.exports = AmazonHomePage