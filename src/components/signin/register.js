import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-200 w-500-m w-250-l mw5 center" >
            <main class="pa4 black-80">
                <form class="measure center">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="f4 fw6 ph0 mh0">Sign up</legend>
                        <div class="mt3">
                            <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input class="pa2 input-reset ba bg-transparent hover-white hover-black w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" type="password" name="password" id="password" />
                        </div>
                        <div class="mv3">
                            <label class="db fw6 lh-copy f6" for="password">Confirm Password</label>
                            <input class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" type="password" name="password" id="password" />
                        </div>
                        <div class="">
                            <input
                                onClick={() => onRouteChange('signin')}
                                class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
                        </div>

                    </fieldset>
                </form>
            </main>
        </article>

    );
}
export default Register;