import { DemoBlazeHomeApi } from "../support/DemoBlazeHomeAPI";
import DemoBlazePage from "../models/components/DemoBlazePage";

describe('Demo Blaze Home Page', () => {

  let apiProduct
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com')
    cy.login('hihi0202', 'hihi');
    cy.wait(5000)
    cy.visit('https://www.demoblaze.com')
    DemoBlazeHomeApi.getHomePageProduct().then(entries => apiProduct = entries)
  
  }) 
  it('should be login success', () => {
  
    let apiProductData = apiProduct.response.body.Items;

    apiProductData = apiProductData.map((item) => {
      return {
        itemName: item.title.replace('\n', ''),
        itemPrice: `$${item.price}`,
      };
    });

    cy.log(JSON.stringify(apiProductData));

    new DemoBlazePage().getAllCardData().then((allCardData) => {
      cy.wrap('').then(() => {
        expect(allCardData).to.be.deep.eq(apiProductData);
      });
    });
  });   
})