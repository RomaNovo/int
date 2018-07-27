document.addEventListener('DOMContentLoaded', ()=> {
	let div 	  = document.querySelector('.slide'),
		regAnd 	  = document.querySelector('.reg__and-reg'),
		assent,
		slideColl = document.querySelectorAll('.slide__inner'),
		slideItem = document.querySelectorAll('.slide__item'),
		slideAssent,
		count = 0,
		submit = document.querySelector('.reg__submit'),
		state,
		input = [],
		st,
		reg = document.querySelector('.and-reg'),
		checkbox = reg.querySelector('.checkbox__label'),
		skillBlocks = document.querySelectorAll('.skill-blocks'),
		current = (function(){
			return document.querySelector('.skill-blocks_active');	
		}());
		var arr = [];

	slideColl.forEach( (item,it) => {
		item.addEventListener('click', function() {

			if(skillBlocks[it].classList.contains('check') || skillBlocks[it - 1].classList.contains('check') ) {

				skillBlocks.forEach( items => {
					items.classList.remove('skill-blocks_active');
				})

				skillBlocks[it].classList.add('skill-blocks_active');
			}

		})
		/*if(slideAssent) {
			if(i != 3){
				item.addEventListener('click', ()=> {
					document.querySelectorAll('.skill-blocks').forEach( (item,i) => {
						item.classList.remove('skill-blocks_active');	
					});
				document.querySelectorAll('.skill-blocks')[i].classList.add('skill-blocks_active');
				}) 
			}
		}	*/	
	});
	let types = {
    'email': /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    'phone': /^\+([0-9]|\(|\)|.)+$/,
    'text': /.+/,
  };

  let _ = (events, target, func) => {
    events.split(' ').forEach((event) => {
      document.addEventListener(event, (e) => {
        [...document.querySelectorAll(target)].forEach((item) => {
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

 


  let validate = () => {
    let inputs = [...document.querySelectorAll('[data-type]')];
    let passed = true;
    let password;
    
    inputs.forEach((item) => {
      
      if (item.dataset.type == 'password') password = item.value;
      if ((types[item.dataset.type] && types[item.dataset.type].test(item.value)) || (item.value == password && item.value != '')){
        item.classList.remove('form-reg__input_novalid');
      }
      else{
        passed = false;
        item.classList.add('form-reg__input_novalid');
      }
    });
  /*  alert(passed); // state of validation - true || false*/
    return passed;
  };

 
	function checked(obj) {
		
		if(obj.classList.contains('check')) {
			
			state = arr[obj.dataset.num];
		} else {
			state = {
						0 : false,
						1 : false,
						2 : false,
						3 : false
					};
		}
		
			
		if (obj.classList.contains('skill-blocks_active')) {
			
			let checkBlock = obj.querySelectorAll('.elm__item--checked');	
			

			checkBlock.forEach(function(item,i) {
				
				item.addEventListener('click', function(){

					item.classList.toggle('elm__item--checked_active');

					assent = Array.from(checkBlock).some(function(el){
						return el.classList.contains('elm__item--checked_active');	
					});

					if(assent) {
						obj.classList.add('check');
						submit.style.opacity = '1';
						submit.style.cursor = 'pointer';				
					} else {
						obj.classList.remove('check');
						submit.style.opacity = '.5';
						submit.style.cursor = 'not-allowed';	
					};

					state[i] = (item.classList.contains('elm__item--checked_active'))?  true : false;
				});
				

			});
			window.addEventListener('keypress', function(e){
				console.log(e.charCode);
				if(e.charCode == 49) {
					checkBlock[0].classList.toggle('elm__item--checked_active');
				} else if(e.charCode == 50) {
					checkBlock[1].classList.toggle('elm__item--checked_active');
				} else if(e.charCode == 51) {
					checkBlock[2].classList.toggle('elm__item--checked_active');
				} else if(e.charCode == 52) {
					checkBlock[3].classList.toggle('elm__item--checked_active');
				}
				
				assent = Array.from(checkBlock).some(function(el){
					return el.classList.contains('elm__item--checked_active');	
				});

				if(assent) {
					obj.classList.add('check');
					submit.style.opacity = '1';
					submit.style.cursor = 'pointer';				
				} else {
					obj.classList.remove('check');
					submit.style.opacity = '.5';
					submit.style.cursor = 'not-allowed';	
				};
				checkBlock.forEach( (item,i) => {
					state[i] = (item.classList.contains('elm__item--checked_active'))?  true : false;
				})
				
			});
		} else {
			current = null;
			submit.style.opacity = '.5';
			submit.style.cursor = 'not-allowed';	
			
			checkbox.addEventListener('click', function() {
				checkbox.classList.toggle('checked');

				st = (checkbox.classList.contains('checked'))? true : false;
				if(st) {
					submit.style.opacity = '1';
					submit.style.cursor = 'pointer';
				} else {
					submit.style.opacity = '.5';
					submit.style.cursor = 'not-allowed';
				}				
			})
		}					
	}

	checked(current);

	submit.addEventListener('click',  ()=> {
		if(current) {

			slideColl.forEach( (item,it) => {
				item.addEventListener('click', function() {
					if(skillBlocks[it].classList.contains('check') || skillBlocks[it - 1].classList.contains('check') ) {
						regAnd.classList.remove('reg__and-reg_active');
						skillBlocks.forEach( items => {
							items.classList.remove('skill-blocks_active');
						})
						skillBlocks[it].classList.add('skill-blocks_active');
						current = skillBlocks[it];
						/*console.log(current)*/
						checked(current);
					}/* else {
						var dostup = Array.from(skillBlocks).every( (item) => {
							return item.classList.contains('check');
						})
						if(dostup) {
							alert(hi)
						}
						console.log(dostup)
					}*/

				}) 
			})

			if(assent) {
				arr.push(state);
				current.classList.remove('skill-blocks_active');
				slideColl[count].classList.remove('slide__inner_active');
				count++;
				if(current.nextElementSibling) {
					current = current.nextElementSibling;
					current.classList.add('skill-blocks_active');
					slideColl[count].classList.add('slide__inner_active');
					submit.style.opacity = '.5';
					submit.style.cursor = 'not-allowed';
					checked(current);
				} else {
					regAnd.classList.add('reg__and-reg_active');
					slideColl[count].classList.add('slide__inner_active');
					checked(reg)
				}			
			}


			assent = false;	
		} else {
			/*alert('validate');*/
			let inp = document.querySelectorAll('[data-type]');
			let obj = [];
			inp.forEach(item => {
					obj.push(item.value);			
			})
			if(!validate()) {
				_('input', '[data-type]', (e, el) => {

			    let input = el;
			    if (types[el.dataset.type].test(el.value)){
			      input.classList.add('form-reg__input_valid');
			      input.classList.remove('form-reg__input_novalid');
			    }
			    else {
			    	input.classList.add('form-reg__input_novalid');
			    	input.classList.remove('form-reg__input_valid');
			    };
			  });
			}
			if(validate() && inp[1].value === inp[2].value && st){
				arr.push(obj);
				fetch('/trainningorder', {
				  method: 'post',
				  headers: {
				    'Accept': 'application/json, text/plain, */*',
				    'Content-Type': 'application/json'
				  },
				  body: JSON.stringify(arr)
				})
				/*.then(res=>res.json())
				.then(res => console.log(res));*/

				arr = [];
			} else {
			};
		}							
	})	
})

