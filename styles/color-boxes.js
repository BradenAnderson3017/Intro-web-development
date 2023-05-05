let boxDiv = $('#boxDiv');
for (let i = 0; i < 16; i++) {
  let darkBoxes = $('<div></div>');
  boxDiv.append(darkBoxes);
  darkBoxes.addClass('boxes');
  darkBoxes.addClass('toggleSwitch');
}
let boxes = $('.boxes');
boxes.on('click',function(){
$(this).toggleClass('toggleSwitch')
})