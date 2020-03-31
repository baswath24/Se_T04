import React from 'react';
var page;

const Signin = ({ onRouteChange }) => (<article class=" br2 ba dark-gray b--black-10 mv4 w-200 w-500-m w-250-l mw5 center">
    <main class="style={{text-align:'center'}} pa4 black-80">
        <div class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend class="f4 fw6 ph0 mh0">Sign In</legend>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" htmlfor="email-address">Email</label>
                    <input class="b pa2 input-reset ba hover-bg-black bg-transparent  hover-black w-100" type="email" name="email-address" id="email-address" />
                </div>
                <div class="mt3">
                    <label class="db fw6 lh-copy f6" htmlfor="password">Password</label>
                    <input class="b pa2 input-reset ba bg-black bg-transparent  hover-black w-100" type="password" name="password" id="password" />
                </div>
                <div class=" mv3 dropdown style={{border-color:black}}">
                    <button class="btn b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Role
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button
                            onClick={() => page = 'dl'}
                            class="dropdown-item" type="button">Donor</button>
                        <button
                            onClick={() => page = 'vl'}
                            class="dropdown-item" type="button">Volunteer</button>
                        <button class="dropdown-item" type="button">NGO</button>
                        <button class="dropdown-item" type="button">Admin</button>
                    </div>
                </div>
                <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                <div class="">
                    <input
                        onClick={() => { onRouteChange(page); page = 'signin' }}
                        class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                </div>
                <div class="lh-copy mt3">
                    <a
                        onClick={() => onRouteChange('signup')}
                        href="#0" class="f6 link dim black db">Sign up</a>
                    <a href="#0" class="f6 link dim black db">Forgot your password?</a>
                </div>
            </fieldset>
        </div>
    </main>
</article>)
export default Signin;