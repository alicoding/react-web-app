var React = require('react');
var {Link} = require('react-router');

var Thanks = React.createClass({
    render: function () {
        return (<main id="thanks">
            <h1>Great!</h1>
            <Link to="main">Start again</Link>
        </main>);
    }
});

module.exports = Thanks;
