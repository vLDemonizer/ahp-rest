class UserSelectedComponent extends React.Component {
    render () {
        const user = this.props.user
        return (
            <div>{user.first_name} - {user.last_name}</div>
        );
    }
}

class UserListComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: null,
            userList: [],
            error: '',
        }
        this.getUser = this.getUser.bind(this);
    }

    componentWillMount () {
        axios.get('/users/')
            .then(response => {
                let users = response.data.map(user => {
                    return <option key={user.pk} value={user.pk}>
                                {user.username} / {user.first_name} {user.last_name}
                            </option>
                });
                this.setState({
                    users: response.data,
                    userList: users
                });
            })
            .catch(error => {
                this.setState({error: "Users not found"});
            })
    }

    getUser () {
        ReactDOM.render(
            <UserSelectedComponent user={this.state.users[parseInt(($('#user').val())) - 1]} />,
            document.getElementById('react-root')
        );
    }

    render () {
        return (
            <div>
                <input id="user" type="text" list="users" value={this.state.error ? this.state.error : ''}/>
                <datalist id="users">
                    {this.state.userList}
                </datalist>
                <button type="button" className="btn btn-primary" onClick={this.getUser}>Select</button>
            </div>
        );
    }
}