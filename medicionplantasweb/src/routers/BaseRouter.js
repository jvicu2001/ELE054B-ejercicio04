import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AgregarMedidasContainer } from '../containers/AgregarMedidasContainer';
import { VerMedidasContainer } from '../containers/VerMedidasContainer';
import { Navbar } from '../components/Navbar';
export const BaseRouter = ()=>{
    return (
        <Router>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/agregar" exact component={AgregarMedidasContainer}></Route>
                    <Route path="/" component={VerMedidasContainer}></Route>
                </Switch>
            </div>
        </Router>
    )
};