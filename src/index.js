var React = require('react');
var Router = require('react-router');
var { State, Route, DefaultRoute, RouteHandler } = Router;

// This wraps every view
var App = React.createClass({
    mixins: [State],
    render: function () {
        var name = this.getRoutes().reverse()[0].name;
        return (<div className="wrapper">
            <nav><h1>lalalala mozilla</h1></nav>
            <RouteHandler key={name} {...this.props} />
        </div>);
    }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="main" handler={require('./views/Main')}/>
    <Route name="next" handler={require('./views/Next')} />
    <Route name="thanks" handler={require('./views/Thanks')} />
  </Route>
);

// Uncomment to use touch events
// React.initializeTouchEvents(true);

// Use Router.HistoryLocation for HTML5 push state.
Router.run(routes, function (Handler, state) {
    React.render(<Handler params={state.params}/>, document.body);
});
