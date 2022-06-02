/**
 * Handles the width component for wazframe dimensions panel.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	__experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import {cleanEmptyObject} from "./utils";


/**
 * Checks if there is a current value in the height block support attributes.
 * ToolsPanelItem requires a bool check for an existing value.
 *
 * @param {Object} props Block props.
 * @return {boolean}	Whether or not the block has a value set.
 */
export function hasWidthValue( props ) {
	return props.attributes.dimensions?.width !== undefined;
}

/**
 * Resets the height attribute.
 *
 * @param {Object} props		Block props.
 * @param {Object} props.attributes	Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attribute.
 */
export function resetWidth( { attributes = {}, setAttributes } ) {
	const { dimensions }	= attributes;

	setAttributes( {
		dimensions: cleanEmptyObject( {
			...dimensions,
			width: undefined,
		} ),
	} );
}

/**
 * Inspector control panel containing the height related configuration.
 *
 * @param {Object} props
 * @returns {WPElement} Height edit element.
 */

export function WidthEdit( props ) {
	const {
		attributes: { dimensions },
		setAttributes,
	} = props

	const units = [
		{ value: 'vw', label: 'VW' },
		{ value: 'em', label: 'EM' },
		{ value: 'rem', label: 'REM' },
		{ value: '%', label: '%' },
		{ value: 'px', label: 'PX' },
	]

	const onChange = ( modifyValue ) => {



		const newValue = {
			...dimensions,
			width: modifyValue,
		};

		setAttributes( {
			dimensions: cleanEmptyObject( newValue ),
		} );
	};

	return (
		<>
			<UnitControl
				label={ __( 'Width' ) }
				value={ dimensions?.width }
				units={ units }
				onChange={ onChange }
			/>
		</>
	);
}
