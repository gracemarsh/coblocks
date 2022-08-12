/**
 * Include our constants
 */
import * as helpers from '../../../../.dev/tests/cypress/helpers';

describe( 'Test CoBlocks Highlight Block', function() {
	/**
	 * Test that we can add a Highlight block that migrates into the core/paragraph block.
	 */
	it( 'renders a paragraph block', function() {
		const config = Cypress.config();
		helpers.goTo( `/wp-admin/post.php?post=${ config.migrationPostList.highlight }&action=edit` );

		helpers.openBlockNavigator();

		cy.get( '[data-type="core/paragraph"]' ).should( 'have.length', 2 );
		cy.get( '[data-type="core/paragraph"]' ).should( 'contain', 'test highlight 1' );
	} );

	it( 'should carry over pre selected colors', function() {
		const config = Cypress.config();
		helpers.goTo( `/wp-admin/post.php?post=${ config.migrationPostList.highlight }&action=edit` );

		helpers.openBlockNavigator();

		cy.get( '[data-type="core/paragraph"]' ).contains( 'test highlight 2' ).should( 'have.attr', 'style', 'color:#19b8c3' );
	} );
} );
