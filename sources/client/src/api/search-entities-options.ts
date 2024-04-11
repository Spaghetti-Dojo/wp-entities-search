/**
 * External dependencies
 */
import EntitiesSearch from '@types';

/**
 * Internal dependencies
 */
import { Set } from '../models/set';
import { searchEntities } from './search-entities';
import { convertEntitiesToControlOptions } from '../utils/convert-entities-to-control-options';

export async function searchEntitiesOptions< E >(
	type: string,
	phrase: string,
	postTypes: EntitiesSearch.Kind< string >,
	queryArguments?: EntitiesSearch.QueryArguments
): Promise< Set< EntitiesSearch.ControlOption< E > > > {
	const postsEntities =
		await searchEntities< EntitiesSearch.SearchEntityFields >(
			type,
			postTypes,
			phrase,
			queryArguments
		);

	const { fields = [] } = queryArguments ?? {};
	const [ label = 'title', value = 'id', ...extraFields ] = fields;

	return convertEntitiesToControlOptions(
		postsEntities,
		label,
		value,
		...extraFields
	);
}
