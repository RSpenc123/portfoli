import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Homepage from "./Components/homepage"
import Book from "./Components/book"
import Artistry from "./Components/Artistry"


export default (
    <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = "/Book" component={Book}/>
        <Route path = "/Artistry" component={Artistry}/>
        
    </Switch>
)