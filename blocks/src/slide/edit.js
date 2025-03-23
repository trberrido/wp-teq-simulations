import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {

	const MC_TEMPLATE = [
		[ 'core/image', {} ],
		[ 'core/paragraph', { content: 'Text content' } ]
	];
	const blockProps = useBlockProps( { className: 'sim-slide sim-slide-single-editor' } );
	const innerBlocksProps = useInnerBlocksProps(
        blockProps,
		{ template: MC_TEMPLATE },
	);

	return (
		<div { ...innerBlocksProps } />
	);

}