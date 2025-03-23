<?php if ( ! defined( 'ABSPATH' ) ) exit;

add_filter('upload_mimes', 'sim__allow_splinecode_upload');
function sim__allow_splinecode_upload($mime_types) {
    $mime_types['splinecode'] = 'application/octet-stream';
    return $mime_types;
}