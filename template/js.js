
ymaps.ready(init);
        
function init() {

	var listItems = [
      new ymaps.control.ListBoxItem(''),
    ],

    myListBox = new ymaps.control.ListBox({
      data: {
        content: 'Выбрать фильтры'
      },
      items: listItems
    });
    var myMap = new ymaps.Map('map', {
            center: [45.02, 38.59],
            zoom: 10,
            controls: ['searchControl', 'geolocationControl', 'typeSelector']
        }),
		
		
		
     ButtonLayout = ymaps.templateLayoutFactory.createClass([
            '<div title="{{ data.title }}" class="my-button ',
            '{% if state.size == "small" %}my-button_small{% endif %}',
            '{% if state.size == "medium" %}my-button_medium{% endif %}',
            '{% if state.size == "large" %}my-button_large{% endif %}',
            '{% if state.selected %} my-button-selected{% endif %}">',
            '<img class="my-button__img" src="{{ data.image }}" alt="{{ data.title }}">',
            '<span class="my-button__text">{{ data.content }}</span>',
            '</div>'
        ].join('')),

        buttonVodorosli = new ymaps.control.Button({
            data: {
                image: 'images/2.png'
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
		});
		 buttonTrash = new ymaps.control.Button({
            data: {
                image: 'images/trash.png'
            },
            options: {
                layout: ButtonLayout,
                maxWidth: [170, 190, 220]
            }
        }); 
    myMap.controls.add(buttonVodorosli);
	myMap.controls.add(buttonTrash);
	myMap.controls.add(myListBox);
	var canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    maxOfWeights = 1,
    radius = 20;

context.clearRect(0, 0, 256, 256);

for (var i = 0, length = points.length; i < length; i++) {
    context.globalAlpha = Math.min(points[i].weight / maxOfWeights, 1);
    context.drawImage(
        brush, points[i].coords[0] - radius, points[i].coords[1] - radius
    );
}
	}
	
