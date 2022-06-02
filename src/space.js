/**
 * Handles the width component for wazframe dimensions panel.
 */

/**
 * WordPress dependencies
 */
import {__, _x} from '@wordpress/i18n';
import {__experimentalUnitControl as UnitControl,} from '@wordpress/components';
import {cleanEmptyObject} from "./utils";

/**
 * Checks if there is a current value in the height block support attributes.
 * ToolsPanelItem requires a bool check for an existing value.
 *
 * @param {Object} props Block props.
 * @return {boolean}	Whether or not the block has a value set.
 */
export function hasSpaceValue( props ) {
	return props.attributes.dimensions?.space !== undefined;
}

/**
 * Resets the height attribute.
 *
 * @param {Object} props		Block props.
 * @param {Object} props.attributes	Block's attributes.
 * @param {Object} props.setAttributes Function to set block's attribute.
 */
export function resetSpace( { attributes = {}, setAttributes } ) {
	const { dimensions }	= attributes;

	setAttributes( {
		dimensions: cleanEmptyObject( {
			...dimensions,
			space: undefined,
		} ),
	} );
}

/**
 * Inspector control panel containing the height related configuration.
 *
 * @param {Object} props
 * @returns {WPElement} Height edit element.
 */

export function SpaceEdit( props ) {
	const {
		attributes: { dimensions },
		setAttributes,
	} = props

	const units = [
		{ value: 'em', label: 'EM', step: 0.001, a11yLabel: _x( 'ems', 'Relative to parent font size (em)' ), },
		{ value: 'rem', label: 'REM', step: 0.001, a11yLabel: _x( 'rems', 'Relative to root font size (rem)' ), },
		{ value: '%', label: '%', step: 0.1, a11yLabel: __( 'Percent (%)' ), },
		{ value: 'px', label: 'PX', step: 1, a11yLabel: __( 'Pixels (px)' ), },
	]

	const onChange = ( modifyValue ) => {

		const newValue = {
			...dimensions,
			space: modifyValue,
		};

		setAttributes( {
			dimensions: cleanEmptyObject( newValue ),
		} );
	};

	return (
		<>
			<UnitControl
				label={ __( 'Block Spacing' ) }
				value={ dimensions?.space }
				units={ units }
				onChange={ onChange }
			/>
		</>
	);
}
