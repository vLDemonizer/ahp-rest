class CreateObjective extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            objectives: null,
            users: null,
            error: null,
            
        }
        this.submitObjective = this.submitObjective.bind(this);
    };

    componentWillMount() {
        axios.get('/objectives')
            .then((response) => {
                console.log(response);
                this.setState({objectives: response.data});
                
            })
            .catch((error) => {
            });
        axios.get('/users')
            .then((response) => {
                console.log(response);
                this.setState({users: response.data});
                
            })
            .catch((error) => {
            });
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

    submitObjective(e) {
        axios.post('/users/', {
            username: 'firsta-user',
            password: '12345678',
            first_name: 'pepe',
            last_name: 'popo'
        })
            .then((response) => {
                console.log(response);
                this.setState({users: response.data});
            })
            .catch((error) => {
                this.setState({error: 'Username taken.'})
            });
    }

    

    render () {
        return (
            <div>
                <div>{this.state.objectives}</div>
                <button type="button" onClick={this.submitObjective}>User</button>
                
            </div>
        );
    }
}
