<div
	data-wp-interactive="sim"
	data-wp-init="callbacks.init"
	data-wp-watch="callbacks.transition"
	<?php echo wp_interactivity_data_wp_context(['index' => 0]); ?>
	<?php echo get_block_wrapper_attributes(); ?>>

	<div class="sim-slides__content">
		<?php echo $content; ?>
	</div>

	<div class="sim-slides__nav">
		<button
			data-wp-on--click="actions.prev"
			class="sim-slides-prev">Previous</button>
		<button
			data-wp-on--click="actions.next"
			class="sim-slides-next">Next</button>
	</div>

	<div class="sim-slides__rido">
		<div class="sim-slides__rido-blur"></div>
		<div class="sim-slides__rido-color"></div>
	</div>

</div>