const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let itemDiv = $('#items');
let myFunction = $.each(storeItems,function(index,item){
    
    let priceSpan = $('<div>').text('$' + item.price);
    let nameSpan = $('<div>').text(item.name);
    let detailsSpan = $('<div>').text(item.details);
    
    priceSpan.addClass('spacing');
    nameSpan.addClass('spacing');
    detailsSpan.addClass('spacing');
    
    let appended = $('<p>');
    appended.append(priceSpan);
    appended.append(nameSpan);
    appended.append(detailsSpan);
    
    if(item.inStock !== true){
        appended.addClass('notInStock'); 
     
    }
    $('.notInStock').remove();
    itemDiv.append(appended);
    
})
  

let toggle = document.getElementsByClassName('itemContainer')[0];
let button = document.getElementById('darkMode');

button.addEventListener('click', function(){
    toggle.classList.toggle("darkMode");
});




