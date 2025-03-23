import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {

	const MC_TEMPLATE = [ [ 'sim/spline', {} ], [ 'sim/slide', {} ] ];
	const blockProps = useBlockProps( { className: 'sim-slides-editor' } );
	const innerBlocksProps = useInnerBlocksProps( blockProps, { template: MC_TEMPLATE } );

	return (
		<div { ...innerBlocksProps } />
	);
}