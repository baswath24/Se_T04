import React from 'react';
var page;
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sigInName: '',
            sigInEmail: '',
            sigInPassword: '',
            sigInCPassword: '',
            Role: ''
        }
    }
    onNameChange = (event) => {
        this.setState({ sigInName: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ sigInEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ sigInPassword: event.target.value })
    }
    onCPasswordChange = (event) => {
        this.setState({ sigInCPassword: event.target.value })
    }

    loadUser = (data) => {
        console.log(data);
    }
    //this.props.onRouteChange('signin')
    onSignup = () => {
        if (this.state.sigInPassword === this.state.sigInCPassword) {
            fetch('/register', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.state.sigInName,
                    email: this.state.sigInEmail,
                    password: this.state.sigInPassword,
                    role: this.state.Role
                })
            }).then(response => response.json())
                .then(data => console.log(data))
                .then(this.props.onRouteChange('signin'))


        }
        else {
            this.props.onRouteChange('signup');
        }
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <article class=" br2 ba dark-gray b--black-10 mv4 w-200 w-500-m w-250-l mw5 center" >
                <main class="pa4 black-80">
                    <form class="measure center">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                            <legend class="f4 fw6 ph0 mh0">Sign up</legend>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="name">Name</label>
                                <input
                                    class="pa2 input-reset ba bg-transparent hover-white hover-black w-100"
                                    type="text" name="name" id="name"
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-white hover-black w-100"
                                    type="email" name="email-address" id="email-address"
                                    onChange={this.onEmailChange}
                                />

                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="password">Password</label>
                                <input
                                    class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                                    type="password" name="password" id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="password">Confirm Password</label>
                                <input
                                    class="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                                    type="password" name="password" id="password"
                                    onChange={this.onCPasswordChange}
                                />
                            </div>
                            <div className=" mv3 dropdown style={{border-color:black}}">
                                <button className="btn b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib  dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Role
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button
                                        onClick={() => this.state.Role = 'dl'}
                                        className="dropdown-item" type="button">Donor</button>
                                    <button
                                        onClick={() => this.state.Role = 'nl'}
                                        className="dropdown-item" type="button">Volunteer</button>

                                </div>
                            </div>
                            <div class="">
                                <input
                                    onClick={this.onSignup}
                                    class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
                            </div>

                        </fieldset>
                    </form>
                </main>
            </article>

        );
    }
}
export default Register;