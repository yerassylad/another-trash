import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class ModalSwitch extends Component {
    previousLocation = this.props.location;

    componentWillUpdate = nextProps => {
        const { location } = this.props;

        if (
            nextProps.location.action !== "POP" && 
            (!location.state || !location.state.modal)
        ) {
            
            this.previousLocation = this.props.location;
            console.log('something happens', this.previousLocation);
        }
    }

    render() {
        const { location } = this.props;
        
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );
        return (
            <Fragment>
                <Switch location={isModal ? this.previousLocation : null}>
                    <Route exact path="/" component={Home} />
               </Switch>
                {isModal ? <Route path="/img/:id" component={Modal} /> : null}
            </Fragment>
        );
    }
}

const IMAGES = [
    {id: 0, url: "https://pp.userapi.com/c540100/v540100321/6a1ff/CJCO9qy1Vb0.jpg"},
    {id: 1, url: "https://pp.userapi.com/c846323/v846323472/1cc876/sgfEorVQqHc.jpg"}
]

const Home = () => {
    return (
        <Fragment>
            <Link to={{
                pathname: `/img/0`,
                state: {modal: true}
            }} >img0</Link>
            <Link to={{
                pathname: `/img/1`,
                state: {modal: true}
            }} >img1</Link>
        </Fragment>
    );
}

const Modal = ({match}) => {
    const image = IMAGES[parseInt(match.params.id, 10)];

    return (
        <div>
            <img src={image.url} alt="asd" />
        </div>
    );
}

const App = () => {
  return (
    <Router>
      <Route component={ModalSwitch} />
    </Router>
  )
}

export default App
