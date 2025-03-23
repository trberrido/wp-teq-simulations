<div <?php echo get_block_wrapper_attributes(['class' => 'sim-slide sim-slide--spline  sim-slide--inactive']); ?>>
	<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
	<spline-viewer url="<?php echo $attributes['url']; ?>"></spline-viewer>
</div>