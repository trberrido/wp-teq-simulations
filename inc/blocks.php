<?php if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'init', 'sim__register_blocks_types' );
function sim__register_blocks_types(): void {
	foreach ( glob( get_stylesheet_directory() . '/blocks/build/*' ) as $block_directory ) {
		register_block_type( $block_directory );
	}
}

add_action( 'init', 'sim__enqueue_blocks_styles' );
function sim__enqueue_blocks_styles(): void {
	$blocks_css_directory = '/blocks/assets/css/';
	foreach ( glob( get_stylesheet_directory() . $blocks_css_directory . '*', GLOB_ONLYDIR ) as $directory ) {
		$namespace = basename( $directory );
		foreach ( glob( $directory . '/*.css' ) as $css_file ) {
			$blockname = basename( $css_file, '.css' );
			wp_enqueue_block_style(
				$namespace . '/' . $blockname,
				array(
					'handle'	=> 'df-' . $namespace . '-' . $blockname,
					'src'		=> get_template_directory_uri() . $blocks_css_directory . $namespace . '/' . $blockname . '.css',
					'path'		=> get_template_directory() . $blocks_css_directory . $namespace . '/' . $blockname . '.css',
					'ver'		=> filemtime( get_template_directory() . $blocks_css_directory . $namespace . '/' . $blockname . '.css' )
				)
			);
		}
	}

}