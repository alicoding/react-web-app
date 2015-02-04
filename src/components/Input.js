var React = require('react');

var Input = React.createClass({
    render: function () {
        return (<div className="input-group">
            <input
                placeholder={this.props.label}
                type={this.props.type || 'text'} required />
        </div>);
    }
});

module.exports =  Input;
