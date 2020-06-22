'use strict';

console.log("App.js is running");

var headingObj = {
    title: 'Indicision App',
    subtitle: 'Automate the decision stuff.',
    options: ['One', 'Two']
};
// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        headingObj.title
    ),
    headingObj.subtitle && React.createElement(
        'p',
        null,
        headingObj.subtitle
    ),
    React.createElement(
        'p',
        null,
        headingObj.options && headingObj.options.length != 0 ? 'Here are your Options' : 'no options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        ),
        React.createElement(
            'li',
            null,
            'Item Three'
        )
    )
);

var count = 0;

var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var subOne = function subOne() {
    count--;
    renderCounterApp();
};
var resetCount = function resetCount() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');
var appRootTwo = document.getElementById('appTwo');

ReactDOM.render(template, appRoot);

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { id: 'plus-button', className: 'button', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { id: 'minus-button', className: 'button', onClick: subOne },
            '-1'
        ),
        React.createElement(
            'button',
            { id: 'reset-button', className: 'button', onClick: resetCount },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRootTwo);
};

renderCounterApp();
