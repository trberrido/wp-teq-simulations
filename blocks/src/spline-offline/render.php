<?php

$canvas_id = wp_unique_id( 'spline-' );

?>

<div <?php echo get_block_wrapper_attributes(['class' => 'sim-slide sim-slide--spline  sim-slide--inactive']); ?>>
<canvas id="<?php echo $canvas_id; ?>"></canvas>
	<script type="module">
		import { Application } from '<?php echo get_stylesheet_directory_uri(); ?>/assets/js/runtime.js';
		document.addEventListener("DOMContentLoaded", () => {
			const canvas = document.getElementById( '<?php echo $canvas_id; ?>' );
			const app = new Application(canvas);
			app.load('<?php echo $attributes['fileUrl']; ?>');
		});
	</script>

</div>