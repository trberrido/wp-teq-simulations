<?php if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'after_setup_theme', 'sim__load_includes', 5 );
function sim__load_includes(): void {

	foreach ( glob( get_template_directory() . '/inc/*.php' ) as $filepath ){
		require_once $filepath;
	}

}