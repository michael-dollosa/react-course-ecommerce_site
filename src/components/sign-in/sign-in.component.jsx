import React from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'


import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''}) //resetting state
        } catch(error) {
            console.log(error)
        }
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" value={this.state.email} handleChange={this.handleChange} required />

                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} required />

                    <div className="button">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn