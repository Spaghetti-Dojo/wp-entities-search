/**
 * External dependencies
 */
import { fromPartial } from '@total-typescript/shoehorn';
import Kensaku from '@types';

import { describe, expect, it, jest } from '@jest/globals';

/**
 * Internal dependencies
 */
import { useEntityRecords } from '../../../../sources/client/src/hooks/use-entity-records';
import { useQueryViewableTaxonomies } from '../../../../sources/client/src/hooks/use-query-viewable-taxonomies';
import { Set } from '../../../../sources/client/src/models/set';

jest.mock( '../../../../sources/client/src/hooks/use-entity-records', () => {
	return {
		useEntityRecords: jest.fn(),
	};
} );

describe( 'useQueryViewableTaxonomies', () => {
	it( 'should return the viewable taxonomies', () => {
		jest.mocked( useEntityRecords ).mockReturnValue( {
			isResolving: () => false,
			errored: () => false,
			succeed: () => true,
			records: () =>
				new Set( [
					fromPartial< Kensaku.Taxonomy< 'edit' > >( {
						name: 'Category',
						visibility: {
							publicly_queryable: true,
						},
					} ),
					fromPartial< Kensaku.Taxonomy< 'edit' > >( {
						name: 'Tag',
						visibility: {
							publicly_queryable: true,
						},
					} ),
					fromPartial< Kensaku.Taxonomy< 'edit' > >( {
						name: 'Author',
						visibility: {
							publicly_queryable: false,
						},
					} ),
				] ),
		} );

		const taxonomies = useQueryViewableTaxonomies();
		expect( taxonomies.records().length() ).toEqual( 2 );
		for ( const viewableTaxonomy of taxonomies.records() ) {
			expect( viewableTaxonomy.visibility.publicly_queryable ).toEqual(
				true
			);
		}
	} );
} );
