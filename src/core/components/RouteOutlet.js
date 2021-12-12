import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Game from '../../components/game/Game';
import About from '../../components/about/About';
import MyProfile from '../../components/my-profile/MyProfile';

export const RouterOutlet = () =>   <Fragment>
                                        <Route exact path="/" component={Game}></Route>
                                        <Route exact path="/about" component={About}></Route>
                                        <Route exact path="/profile" component={MyProfile}></Route>
                                    </Fragment>;