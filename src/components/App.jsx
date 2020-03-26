import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew.jsx'
import Badges from '../pages/Badges.jsx'
import Home from '../pages/Home.jsx'
import Layout from './Layout.jsx'
import NotFound from '../pages/NotFound.jsx';
import BadgeEdit from '../pages/BadgeEdit.jsx'
import BadgeDetails from '../pages/BadgesDetails.jsx';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}></Route>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App