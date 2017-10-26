class UserCreateComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            error: '',
            submitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    componentWillMount () {
        $('#title').text('User Create');
        axios.get('/users')
        .then(response => console.log(response.data))
    }

    handleChange(key) {
        return (e) => {
            this.setState({
                [key]: e.target.value,
                error: false,
                submitted: false
            })
        }
    }

    submitUser() {
        if (!this.state.password || !this.state.username
            || !this.state.first_name || !this.state.last_name) {
                return this.setState({
                error: 'Fill all the fields before Submit'
            });       
        }
        let user = this.state;
        axios.post('/users/', {
            username: user.username,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name
        })
            .then(response => {
                this.setState({submitted: true});
            })
            .catch(error => {
                this.setState({
                    error: 'Username already exist',
                    submitted: false
                });
            });
        
        
    }

    render () {
        return (
            <div className="container">
                {this.state.error ? 
                    <div className="form-group">
                        <label>Error: {this.state.error}!</label>
                    </div>
                    :
                    ''
                }
                {this.state.submitted ? 
                    <div className="form-group">
                        <label>Success user created!</label>
                    </div>
                    :
                    ''
                }
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" className="form-control" onChange={this.handleChange('username')} value={this.state.username}/>
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" onChange={this.handleChange('password')} value={this.state.password}/>
                </div>
                <div className="form-group">
                    <label>First Name: </label>
                    <input className="form-control" onChange={this.handleChange('first_name')} value={this.state.first_name}/>
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input className="form-control" onChange={this.handleChange('last_name')} value={this.state.last_name}/>
                </div>
                <button className="btn btn-secondary" type="button" onClick={this.submitUser}>Submit</button>
            </div>
        );
    }
}

