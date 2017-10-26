class ObjectiveCreateComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            scale: '',
            alpha: '',
            gci: '',
            cr: '',
            thresh: '',
            error: '',
            submitted: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitObjective = this.submitObjective.bind(this);
        this.handleJudgement = this.handleJudgement.bind(this);
    }

    componentWillMount () {
        $('#title').text('Objective Create');
        axios.get('/objectives')
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

    submitObjective() {
        if (!this.state.scale || !this.state.name
            || !this.state.alpha || !this.state.gci) {
                return this.setState({
                error: 'Fill all the fields before Submit'
            });       
        }
        let objective = this.state;
        axios.post('/objectives/', {
            name: objective.name,
            scale: objective.scale,
            alpha: objective.alpha,
            gci: objective.gci,
            cr: objective.cr,
            thresh: objective.thresh,
            judgments: []

        })
            .then(response => {
                this.setState({submitted: true});
            })
            .catch(error => {
                this.setState({
                    error: 'Could not create Objective',
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
                        <label>Success Objective created!</label>
                    </div>
                    :
                    ''
                }
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" className="form-control" onChange={this.handleChange('name')} value={this.state.name}/>
                </div>
                <div className="form-group">
                    <label>Scale: </label>
                    <input type="number" className="form-control" onChange={this.handleChange('scale')} value={this.state.scale}/>
                </div>
                <div className="form-group">
                    <label>Alpha: </label>
                    <input type="number" className="form-control" onChange={this.handleChange('alpha')} value={this.state.alpha}/>
                </div>
                <div className="form-group">
                    <label>GCI: </label>
                    <input type="number" className="form-control" onChange={this.handleChange('gci')} value={this.state.gci}/>
                </div>
                <div className="form-group">
                    <label>CR: </label>
                    <input type="number" className="form-control" onChange={this.handleChange('cr')} value={this.state.cr}/>
                </div>
                <div className="form-group">
                    <label>Thresh: </label>
                    <input type="number" className="form-control" onChange={this.handleChange('thresh')} value={this.state.thresh}/>
                </div>

                <button className="btn btn-secondary" type="button" onClick={this.submitObjective}>Submit</button>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Judgments</th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" onChange={this.handleJudgement()} />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
