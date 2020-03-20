import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew.jsx'
import Badges from '../pages/Badges.jsx'

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges}></Route>
                <Route exact path="/badges/new" component={BadgeNew}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App