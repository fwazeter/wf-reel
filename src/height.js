/**
 * Handles the height component for wazframe dimensions panel.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { cleanEmptyObject } from "./utils";

/**
 * Checks if there is a current value in the height block support attributes.
 * ToolsPanelItem requires a bool check for an existing value.
 *
 * @param {Object} props Block props.
 * @return {boolean}	Whether or not the block has a value set.
 */
export function hasHeightValue( props ) {
	return props.attributes.dimensions?.height !== undefined;
}

/**
 * Resets the height attribute.
 *
 * @param {Object} props		Block props.
 * @param {Object} props.attributes	Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attribute.
 */
export function resetHeight( { attributes = {}, setAttributes } ) {
	const { dimensions }	= attributes;

	setAttributes( {
		dimensions:  cleanEmptyObject({
			...dimensions,
			height: undefined,
		} ),
	} );
}

/**
 * Inspector control panel containing the height related configuration.
 *
 * @param {Object} props
 * @returns {WPElement} Height edit element.
 */

export function HeightEdit( props ) {
	const {
		attributes: { dimensions },
		setAttributes,
	} = props

	const units = [
		{ value: 'vh', label: 'VH' },
		{ value: 'em', label: 'EM' },
		{ value: 'REM', label: 'REM' },
		{ value: 'px', label: 'PX' },
	]

	const onChange = ( modifyValue ) => {

		const newValue = {
			...dimensions,
			height: modifyValue,
		};

		setAttributes( {
			dimensions: cleanEmptyObject( newValue ),
		} );
	};

	return (
		<>
			<UnitControl
				label={ __( 'Height' ) }
				value={ dimensions?.height }
				units={ units }
				onChange={ onChange }
			/>
		</>
	);
}

