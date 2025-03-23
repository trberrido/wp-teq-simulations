import { useBlockProps, MediaUpload } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
import { Button } from '@wordpress/components';
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
		<div {...useBlockProps({'className': 'spline-block'})}>
			Offline<br/>
			<MediaUpload
				onSelect={(media) => setAttributes({ fileUrl: media.url })}
				allowedTypes={['application/octet-stream']}
				render={({ open }) => (
					<Button onClick={open} variant="primary">
						{attributes.fileUrl ? 'Replace file' : 'Upload file' }
					</Button>
				)}
			/>
			{attributes.fileUrl && <p>{ 'File uploaded:' } <a href={attributes.fileUrl}>{attributes.fileUrl}</a></p>}
		</div>
	);

}
