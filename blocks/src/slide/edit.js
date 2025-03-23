import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {

	const MC_TEMPLATE = [ [ 'core/paragraph', {} ] ];

	const blockProps = useBlockProps({className: 'sim-slide'});
	const innerBlocksProps = useInnerBlocksProps(
        blockProps,
		{ template: MC_TEMPLATE }
	);
	//	<InnerBlocks className='ooooooo' template={ MC_TEMPLATE } { ...useBlockProps() } />
	return (
		<div { ...innerBlocksProps } />
	);

}