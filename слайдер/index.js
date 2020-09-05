'use strict'

let slide = document.querySelectorAll('.slide');
let scroll_right_btn = document.querySelector('.scroll_right_btn');
let scroll_left_btn = document.querySelector('.scroll_left_btn');

let max = slide.length - 1;
let active = 3;
let next;
let before;
let slides = 4;

let run = true;

function timeout () {
  if (run == false) {
    run = true;
  }
}


scroll_right_btn.onclick = function() {

  if (run == true) {

    if (active == max) {
      active = 0;
      next = active + 1;
      before = max - (slides - active) + 1;


      slide[active].style.zIndex = '0';
      slide[active].style.left = '600px';
      slide[max].style.zIndex = '0';
      slide[max].style.left = '400px';
      slide[max - 1].style.zIndex = '0';
      slide[max - 1].style.left = '200px';
      slide[max - 2].style.zIndex = '0';
      slide[max - 2].style.left = '0px';

      slide[next].style.zIndex = '-1';
      slide[next].style.left = '800px';

      slide[before].style.zIndex = '-1';
      slide[before].style.left = '-200px';

    } else {

      if (active < 3) {

        switch (active) {

          case 0:
            active = 1;
            next = active + 1;
            before = max - (slides - active) + 1;


            slide[active].style.zIndex = '0';
            slide[active].style.left = '600px';
            slide[active - 1].style.zIndex = '0';
            slide[active - 1].style.left = '400px'
            slide[max].style.zIndex = '0';
            slide[max].style.left = '200px';
            slide[max - 1].style.zIndex = '0';
            slide[max - 1].style.left = '0px';

            slide[next].style.zIndex = '-1';
            slide[next].style.left = '800px';

            slide[before].style.zIndex = '-1';
            slide[before].style.left = '-200px';
          break;


          case 1:
            active = 2;
            next = active + 1;
            before = max - (slides - active) + 1;

            slide[active].style.zIndex = '0';
            slide[active].style.left = '600px';
            slide[active - 1].style.zIndex = '0';
            slide[active - 1].style.left = '400px';
            slide[active - 2].style.zIndex = '0';
            slide[active - 2].style.left = '200px';
            slide[max].style.zIndex = '0';
            slide[max].style.left = '0px';

            slide[next].style.zIndex = '-1';
            slide[next].style.left = '800px';

            slide[before].style.zIndex = '-1';
            slide[before].style.left = '-200px';
          break;


          case 2:
            active = 3;
            next = active + 1;
            before = max - (slides - active) + 1;

            slide[active].style.zIndex = '0';
            slide[active].style.left = '600px';
            slide[active - 1].style.zIndex = '0';
            slide[active - 1].style.left = '400px';
            slide[active - 2].style.zIndex = '0';
            slide[active - 2].style.left = '200px';
            slide[active - 3].style.zIndex = '0';
            slide[active - 3].style.left = '0px';

            slide[next].style.zIndex = '-1';
            slide[next].style.left = '800px';

            slide[before].style.zIndex = '-1';
            slide[before].style.left = '-200px';
          break;

        }

      } else {

        active = active + 1;


        if (active == max) {
          next = 0;
        } else {
          next = active + 1;
        }

        if (active < slides) {
          before = max - (slides - active);
        } else {
          before = active - slides;
        }


        slide[active].style.zIndex = '0';
        slide[active].style.left = '600px';
        slide[active - 1].style.zIndex = '0';
        slide[active - 1].style.left = '400px';
        slide[active - 2].style.zIndex = '0';
        slide[active - 2].style.left = '200px';
        slide[active - 3].style.zIndex = '0';
        slide[active - 3].style.left = '0px';

        slide[next].style.zIndex = '-1';
        slide[next].style.left = '800px';

        slide[before].style.zIndex = '-1';
        slide[before].style.left = '-200px';

      }


    }


    run = false;

    setTimeout(timeout,800);
  }




}









scroll_left_btn.onclick = function() {

  if (run == true) {

    if (active < slides) {

      switch (active) {

        case 3:
          active = active - 1;
          next =  active + 1;
          before = max - (slides - active) + 1;

          slide[active].style.zIndex = '0';
          slide[active].style.left = '600px';
          slide[active - 1].style.zIndex = '0';
          slide[active - 1].style.left = '400px';
          slide[active - 2].style.zIndex = '0';
          slide[active - 2].style.left = '200px';
          slide[max].style.left = '0px';

          slide[next].style.zIndex = '-1';
          slide[next].style.left = '800px';

          slide[before].style.zIndex = '-1';
          slide[before].style.left = '-200px';
        break;


        case 2:
          active = active - 1;
          next =  active + 1;
          before = max - (slides - active) + 1;

          slide[active].style.zIndex = '0';
          slide[active].style.left = '600px';
          slide[active - 1].style.zIndex = '0';
          slide[active - 1].style.left = '400px';
          slide[max].style.zIndex = '0';
          slide[max].style.left = '200px';
          slide[max - 1].style.zIndex = '0';
          slide[max - 1].style.left = '0px';

          slide[next].style.zIndex = '-1';
          slide[next].style.left = '800px';

          slide[before].style.zIndex = '-1';
          slide[before].style.left = '-200px';
        break;


        case 1:
          active = active - 1;
          next =  active + 1;
          before = max - (slides - active) + 1;

          slide[active].style.zIndex = '0';
          slide[active].style.left = '600px';
          slide[max].style.zIndex = '0';
          slide[max].style.left = '400px';
          slide[max - 1].style.zIndex = '0';
          slide[max - 1].style.left = '200px';
          slide[max - 2].style.zIndex = '0';
          slide[max - 2].style.left = '0px';

          slide[next].style.zIndex = '-1';
          slide[next].style.left = '800px';

          slide[before].style.zIndex = '-1';
          slide[before].style.left = '-200px';
        break;

        case 0:
          active = max;
          next = 0;
          before = max - slides;

          slide[active].style.zIndex = '0';
          slide[active].style.left = '600px';
          slide[active - 1].style.zIndex = '0';
          slide[active - 1].style.left = '400px';
          slide[active - 2].style.zIndex = '0';
          slide[active - 2].style.left = '200px';
          slide[active - 3].style.zIndex = '0';
          slide[active - 3].style.left = '0px';

          slide[next].style.zIndex = '-1';
          slide[next].style.left = '800px';

          slide[before].style.zIndex = '-1';
          slide[before].style.left = '-200px';
        break;

      }

    } else {

      active = active - 1;

      next = active + 1;

      if (active == (slides - 1)) {
        before = max;
      } else {
        before = active - slides;

      }

      slide[active].style.zIndex = '0';
      slide[active].style.left = '600px';
      slide[active - 1].style.zIndex = '0';
      slide[active - 1].style.left = '400px';
      slide[active - 2].style.zIndex = '0';
      slide[active - 2].style.left = '200px';
      slide[active - 3].style.zIndex = '0';
      slide[active - 3].style.left = '0px';

      slide[next].style.zIndex = '-1';
      slide[next].style.left = '800px';

      slide[before].style.zIndex = '-1';
      slide[before].style.left = '-200px';

    }


    run = false;

    setTimeout(timeout,800);
  }

}
