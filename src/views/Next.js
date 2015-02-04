var React = require('react');
var {Link} = require('react-router');

var Next = React.createClass({
    defaults: {
        isOn: false
    },
    getInitialState: function () {
        return this.defaults;
    },
    toggleState: function (e) {
        e.preventDefault();
        this.setState({isOn: !this.state.isOn});
    },
    render: function () {
        var mainClasses = ['blah', 'bloo', 'foo'];
        if (this.state.isOn) mainClasses.push('bar');
        mainClasses = mainClasses.join(' ');
        return (<main id="next" className={mainClasses}>
            <p>Is on: {this.state.isOn.toString()}</p>
            <p><button onClick={this.toggleState}>Toggle</button></p>
            <p><Link to="thanks">Thanks</Link></p>
        </main>);
    }
});

module.exports = Next;
