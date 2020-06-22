console.log("App.js is running");

const headingObj = {
    title : 'Indicision App',
    subtitle : 'Automate the decision stuff.',
    options: ['One', 'Two']
};
// JSX - JavaScript XML

const template = (
    <div>
        <h1>{headingObj.title}</h1>
        {(headingObj.subtitle) && <p>{headingObj.subtitle}</p>}
        <p>{headingObj.options && headingObj.options.length != 0 ? 'Here are your Options' : 'no options'}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
            <li>Item Three</li>
        </ol>
    </div>
);


let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};
const subOne = () => {
    count--;
    renderCounterApp();
};
const resetCount = () => {
    count = 0;
    renderCounterApp();
};




const appRoot = document.getElementById('app');
const appRootTwo = document.getElementById('appTwo');

ReactDOM.render(template, appRoot);




const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id='plus-button' className='button' onClick={addOne}>+1</button>
            <button id='minus-button' className='button' onClick={subOne}>-1</button>
            <button id='reset-button' className='button' onClick={resetCount}>Reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRootTwo);
};

renderCounterApp();