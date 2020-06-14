import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  templateUrl: 'slider.component.html',
  selector: 'slider'

})

export class SliderComponent implements OnInit{

  ngOnInit() {
    $(function() {
      $(document).ready(function() {
          $('.flexslider').flexslider({
              animation: "fade",
              slideshowSpeed: 4000,
              animationSpeed: 600,
              controlNav: false,
              directionNav: true,
              controlsContainer: ".flex-container" // the container that holds the flexslider
          });
      });
  });
}

}
