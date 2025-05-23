import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object}   props               Properties passed to the function.
 * @param {Object}   props.attributes    Available block attributes.
 * @param {Function} props.setAttributes Function that updates individual attributes.
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {

	const blockProps = useBlockProps({'className': 'spline-block'});

	return (
		<p { ...blockProps }>
			Online
			<TextControl
				label="Enter the spline url"
				value={ attributes.url }
				placeholder='https://prod.spline.design/...'
				onChange={ ( url ) => setAttributes( { url } ) }
			/>
		</p>
	);

}
