var React = require('react');
var {Link} = require('react-router');
var Input = require('../components/Input');

var Main = React.createClass({
    render: function () {
        return (<main id="main">
            <p>Hello what is up</p>
            <Input label="blah blah" />
            <Link to="next">Next</Link>
        </main>);
    }
});

module.exports = Main;
