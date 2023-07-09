import DemoBlazePage from '../models/pages/DemoBlazePage';
import {DemoBlazeHomeApi} from '../support/DemoBlazeHomeAPI';

describe('Home Page', () => {

let apiProduct
  beforeEach(() => {
    cy.visit('/');
    // intercept default homepage product
    DemoBlazeHomeApi.getHomePageProduct().then(entries => apiProduct = entries)
  })


  it('should be able to get card hero title', () => {
    
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
});
