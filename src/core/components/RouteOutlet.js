import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Game from '../../components/Game';
import About from '../../components/About';
import MyProfile from '../../components/MyProfile';

export const RouterOutlet = () =>   <Fragment>
                                        <Route exact path="/" component={Game}></Route>
                                        <Route exact path="/about" component={About}></Route>
                                        <Route exact path="/profile" component={MyProfile}></Route>
                                    </Fragment>;