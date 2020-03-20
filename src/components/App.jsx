import React from 'react'
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew.jsx'
import Badges from '../pages/Badges.jsx'
import Home from '../pages/Home.jsx'
import Layout from './Layout.jsx'
import NotFound from '../pages/NotFound.jsx';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App