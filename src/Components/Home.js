import React from 'react';
import NewDoc from './NewDoc';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          password: 'test',
          authorized: false
        };
        this.authorize = this.authorize.bind(this);
      }
    
      authorize(e) {
        const password = e.target.querySelector(
          'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
          authorized: auth
        });
      }
    
      render() {
        const login = (
          <form action="#" onSubmit={this.authorize}>
            <input
              type='password'
              placeholder='Password'
            />
            <input 
              type='submit'
            />
          </form>
        )
        return (
            <div>
                <div id="authorization">
                    <h1>{this.state.authorized ? '' : 'Enter the Password'}</h1>
                    <h1>{this.state.authorized ? 
                    (
                        <NewDoc />
                    ) : (
                        <div>{login}</div>
                    )}</h1>
                </div>
            </div>
        );
      }
    
}

export default Home