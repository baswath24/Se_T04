import React from 'react';
var page = 'Role';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sigInEmail: '',
            sigInPassword: '',
            Role: 'Role'
        }
    }
    onEmailChange = (event) => {
        this.setState({ sigInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ sigInPassword: event.target.value })
    }

    onSubmitSignin = () => {
        page = this.state.Role;
        fetch('https://channelngo2.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.sigInEmail,
                password: this.state.sigInPassword,
                role: page
            })
        }).then(response => response.json())
            .then(data => {
                if (data === 'wrong details') {
                    page = 'signin';
                    this.props.onRouteChange(page);
                }
                else {

                    console.log(data);
                    this.props.loadUser(data.name, data.email);
                    this.props.onRouteChange(this.state.Role);
                    page = 'signin';
                }
            })

        console.log(this.state)
    }
    render() {
        const { onRouteChange } = this.props;
        return (<article className="m-2 br2 ba dark-gray b--black-10 mv4 w-200 w-500-m w-250-l mw5 left">
            <main className="style={{text-align:'center'}} pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div class="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className=" pa2 input-reset ba hover-bg-black   hover-white w-100"
                                type="email" name="email-address" id="email-address"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div classNmae="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba hover-bg-black   hover-white w-100"
                                type="password" name="password" id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                        <div className=" mv3 dropdown style={{border-color:black}}">
                            <button className="btn b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {this.state.Role}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button
                                    onClick={() => this.setState({ Role: 'dl' })}
                                    className="dropdown-item" type="button">Donor</button>
                                <button
                                    onClick={() => this.setState({ Role: 'vl' })}
                                    className="dropdown-item" type="button">Volunteer</button>
                                <button
                                    onClick={() => this.setState({ Role: 'nl' })}
                                    className="dropdown-item" type="button">NGO</button>
                                <button className="dropdown-item" type="button">Admin</button>
                            </div>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignin}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <a
                                onClick={() => onRouteChange('signup')}
                                href="#0" className="f6 link dim black db">Sign up</a>
                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </fieldset>
                </div>
            </main>
        </article>)
    }
}
export default Signin;