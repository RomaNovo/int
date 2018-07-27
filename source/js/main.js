//@prepros-append switch.js
//@prepros-append bg.js
//@prepros-append homeAnimations.js
//@prepros-append animations.js
//@prepros-append nav.js
//@prepros-append modals.js
//@prepros-append reg-state.js

let _ = (events, target, func) => {
  events.split(' ').forEach((event) => {
    document.addEventListener(event, (e) => {
      document.querySelectorAll(target).forEach((item) => {
        let element = e.target;
        if (item == element)
          return func(e, element);
        else{
          while(element.parentElement){
            if (item == element){
              return func(e, element);
            }
            else
              element = element.parentElement;
          }
        }
      });
      return false;
    });
  });
};

class Component{
  constructor(state){
    this.state = state
  }

  setState(obj){
    Object.assign(this.state, obj);
    this.render();
  }

  render(){}
}