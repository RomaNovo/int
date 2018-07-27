class Switch extends Component{
  constructor(item, id){
    super();
    this.name = id;
    this.switch = item;
    this.buttons = item.querySelectorAll('.switch__item');
    this.under = item.querySelector('.switch__move');

    this.state = {
      active: 0
    }

    this.init();
  }

  init(){
    this.buttons.forEach((item, i) => {
      item.onclick = () => this.click.call(this, i)
    });
  }

  click(n){
    this.setState({active: n});
    this.under.style.transform = `translateX(${n * 100}%)`;
    this.buttons.forEach(
      (item, i) => n == i 
        ? item.classList.add('active') 
        : item.classList.remove('active')
    )
    Switch.fire(this.name, this.active);
  }

  get active(){
    return this.state.active;
  }

  static fire(name, active){
    let event = new CustomEvent('switchchange', {'detail': {name: name, active: active}});
    window.dispatchEvent(event);
  }
}

let switches = {};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.switch').forEach((item, i) => {
    let id = item.getAttribute('id');
    id = id ? id : i;
    switches[id] = new Switch(item, id);
  });
});