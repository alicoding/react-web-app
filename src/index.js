var React = require('react');
var Input = require('./components/Input');

// This wraps every view
var App = React.createClass({
    defaults: {
        showScript: false,
        showHeader: true,
        submittedNumber: false
    },
    getInitialState: function () {
        return this.defaults;
    },
    toggleState: function (e) {
        e.preventDefault();
        this.setState({submittedNumber: !this.state.submittedNumber});
    },
    render: function () {
        var mainClasses = ['blah', 'bloo', 'foo'];
        if (this.state.isOn) mainClasses.push('bar');
        mainClasses = mainClasses.join(' ');
        return (<main id="next" className={mainClasses}>
            <p>Is on: {this.state.submittedNumber.toString()}</p>
            <p><Input label="blah" /></p>
            <p><button onClick={this.toggleState}>Toggle</button></p>
        </main>);
    }
});

// Uncomment to use touch events
// React.initializeTouchEvents(true);

React.render(<App/>, document.body);
