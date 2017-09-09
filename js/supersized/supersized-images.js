 jQuery(function($){
				
				$.supersized({
				
					// Functionality
					slideshow               :   1,			// Slideshow on/off
					autoplay			:	1,			// Slideshow starts playing automatically
					start_slide             :   1,			// Start slide (0 is random)
					stop_loop			:	0,			// Pauses slideshow on last slide
					random			: 	0,			// Randomize slide order (Ignores start slide)
					slide_interval          :   5000,		// Length between transitions
					transition              :   6, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
					transition_speed		:	1000,		// Speed of transition
					new_window			:	1,			// Image links open in new window/tab
					pause_hover             :   0,			// Pause slideshow on hover
					keyboard_nav            :   1,			// Keyboard navigation on/off
					performance			:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
					image_protect		:	1,			// Disables image dragging and right click with Javascript
															   
					// Size & Position						   
					min_width		       :   0,			// Min width allowed (in pixels)
					min_height		       :   0,			// Min height allowed (in pixels)
					vertical_center         :   1,			// Vertically center background
					horizontal_center       :   1,			// Horizontally center background
					fit_always			:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
					fit_portrait         	:   1,			// Portrait images will not exceed browser height
					fit_landscape		:   0,			// Landscape images will not exceed browser width
															   
					// Components							
					slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
					thumb_links				:	1,			// Individual thumb links for each slide
					thumbnail_navigation    :   0,			// Thumbnail navigation
					slides 					:  	[			// Slideshow Images
														{image : 'images/slider/1.jpg', title : 'Welcome to Tr<span class="tritex">i</span>Te<span class="tritex">x</span> Fashion <div class="slidedescription">All kind of garments merchant for men’s women’s and kids.</div>', thumb : '', url : 'images/slider/1.jpg'},
														{image : 'images/slider/2.jpg', title : 'Innovation & Quality<div class="slidedescription">Tr<span class="tritexx">i</span>Te<span class="tritexx">x</span> Fashion is known for its own innovation and quality across its clients.</div>', thumb : '', url : 'images/slider/2.jpg'},
														{image : 'images/slider/3.jpg', title : 'Reliability & Punctuality<div class="slidedescription">High quality, market reasonable price and correct delivery time.</div>', thumb : '', url : 'images/slider/3.jpg'},
														{image : 'images/slider/4.jpg', title : 'Creative & Dynamic<div class="slidedescription">We put our best to bring out the inner strength of our employees.</div>', thumb : '', url : 'images/slider/4.jpg'},
														{image : 'images/slider/5.jpg', title : 'Transparency<div class="slidedescription">Tr<span class="tritexx">i</span>Te<span class="tritexx">x</span> Fashion always transparent to its client from sampling stage/order confirm to delivery.</div>', thumb : '', url : 'images/slider/5.jpg'},
														{image : 'images/slider/6.jpg', title : 'Fully Responsive & Dedicated<div class="slidedescription">Highly educated administration who is instantly response to clients feedback and support.</div>', thumb : '', url : 'images/slider/6.jpg'},
														{image : 'images/slider/7.jpg', title : 'Environment Friendly<div class="slidedescription">Our factories environment friendly as work comfortably.</div>', thumb : '', url : 'images/slider/7.jpg'},
														{image : 'images/slider/8.jpg', title : 'Careful to employees<div class="slidedescription">The employees are the heart of the company to whom the company is loyal as well.</div>', thumb : '', url : 'images/slider/8.jpg'},
														{image : 'images/slider/9.jpg', title : 'Flexible<div class="slidedescription">We are always flexible to our clients as well as to our workers.</div>', thumb : '', url : 'images/slider/9.jpg'}
												],
												
					// Theme Options			   
					progress_bar			:	1,			// Timer for each slide							
					mouse_scrub				:	0
					
				});
		    });