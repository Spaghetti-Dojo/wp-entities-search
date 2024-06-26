/**
 * External dependencies
 */
import { describe, expect, it } from '@jest/globals';

/**
 * Internal dependencies
 */
import { makeInitialState } from '../../../../sources/client/src/storage/entities/initial-state';

describe( 'Initial state', () => {
	it( 'ensure all options are empty', () => {
		const initialState = makeInitialState( {} );
		expect( initialState.currentEntitiesOptions.length() ).toBe( 0 );
		expect( initialState.selectedEntitiesOptions.length() ).toBe( 0 );
	} );
} );
