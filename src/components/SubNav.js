import React from 'react';
import { Route, Link, NavLink} from 'react-router-dom';
import Mac from './Sublinks/Mac';
import Music from './Sublinks/Music';
import Tv from './Sublinks/Tv';
import Watch from './Sublinks/Watch';
import Support from './Sublinks/Support';
import Iphone  from './Sublinks/Iphone';
import Ipad from './Sublinks/Ipad';
const SubNav = props => {
    return (
       <div className="sub-nav">
            <Route path="/mac" render={props => <Mac {...props} />}/>
            <Route path="/watch" render={props => <Watch {...props} />}/>
            <Route path="/tv" render={props => <Tv {...props} />}/>
            <Route path="/music" render={props => <Music {...props} />}/>
            <Route path="/support" render={props => <Support {...props} />}/>
            <Route path="/ipad" render={props => <Ipad {...props} />}/>
            <Route path="/iphone" render={props => <Iphone {...props} />}/>
           
       </div>
    )
}

export default SubNav;
