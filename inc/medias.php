<?php defined('ABSPATH') or die();

add_filter( 'image_editor_output_format', 'sim__filter_image_editor_output_format' );
function sim__filter_image_editor_output_format( array $formats ): array {
	$formats['image/jpeg'] = 'image/avif';
	$formats['image/png'] = 'image/avif';
	return $formats;
}

add_filter( 'show_admin_bar' , function () { return false; } );
