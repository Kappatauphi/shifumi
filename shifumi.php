<?php

/*
  Plugin Name: Shifumi Widget
  Description: Allow you to put a widget on your wp-site to play shifumi (rock, paper, scissors)
  Author:      Tmtlsdw
  Version:     0.1
*/

defined( 'ABSPATH' )
	or die ( 'Don\'t' );

define ('path', plugin_dir_path(__FILE__));
define ('url', plugin_dir_url(__FILE__));

	// Creating the widget
	class shifumi_widget extends WP_Widget {
		function __construct() {
			parent::__construct(
			// Base ID of your widget
			'shifumi_widget',
			// Widget name will appear in UI
			__('Shifumi Widget', 'wpb_widget_domain'),
			// Widget description
			array( 'description' => __( 'Allow you to play shifumi', 'wpb_widget_domain' ), )
			);
		}
		// Creating widget front-end
		// This is where the action happens
		public function widget( $args, $instance ) {
		$title = apply_filters( 'widget_title', $instance['title'] );
		// before and after widget arguments are defined by themes
		echo $args['before_widget'];
		if ( ! empty( $title ) )
		echo $args['before_title'] . $title . $args['after_title'];
		// This is where you run the code and display the output
		echo __( '<button class="center_board" id="play_game">Fucked up</button>
					<div class="center_board" id="shifumi_board">
						<div class="center_board" id="pickemup">
							<div class="choices"><img class="rps" id="rock" alt="rock" src="'.url.'img/rock.png"></img></div>
							<div class="choices"><img class="rps" id="paper" alt="paper" src="'.url.'img/paper.png"></img></div>
							<div class="choices"><img class="rps" id="scissors" alt="scissors" src="'.url.'img/scissors.png"></img></div>
						</div>
						<div class="center_board reverse_count" id="textToShow" >Make a choice.</div>
						<div class="center_board show_score" id="HGpoints" >You - NPC</div>
						<div class="center_board show_score" id="HMpoints" >WTF ?</div>
					</div>
					'
					, 'wpb_widget_domain' );
		echo $args['after_widget'];
		}
		// Widget Backend
	/*	public function form( $instance ) {
		if ( isset( $instance[ 'title' ] ) ) {
		$title = $instance[ 'title' ];
		}
		else {
		$title = __( '', 'wpb_widget_domain' );
		}
		// Widget admin form
		?>
		<p>
		<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>
		<?php
		}*/
		// Updating widget replacing old instances with new
		public function update( $new_instance, $old_instance ) {
		$instance = array();
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		return $instance;
		}
	} // Class wpb_widget ends here
	// Register and load the widget
	function shifumi_widget() {
		register_widget( 'shifumi_widget' );
	}

function shifumi_action(){
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'shifumi', url.'js/shifumi.js', true );
		wp_enqueue_style( 'shifumi', url.'css/shifumi.css', true );
}
add_filter( 'widgets_init', 'shifumi_widget' );
add_action( 'wp_enqueue_scripts', 'shifumi_action');