class JudgementTableRowComponent extends React.Component {
    render () {
        const judgement = this.props;
        let judgmentPar = [
            
        ];
        return (
            <tr id={this.props.id}>
                <td>
                    <div className="custom-controls-stacked">
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">{judgement.name}</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">{judgement.comparison}</span>
                        </label>
                    </div>
                </td>
                <td>
                    <div className="custom-controls-stacked">
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">1</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">2</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">3</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">4</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">5</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">6</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">7</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked4" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">8</span>
                        </label>
                        <label className="custom-control custom-radio">
                            <input id="radioStacked3" name="radio-stacked" type="radio" className="custom-control-input" onClick={console.log('sup')}/>
                            <span className="custom-control-indicator"></span>
                            <span className="custom-control-description">9</span>
                        </label>
                    </div>
                </td>
            </tr>
        );
    }
}

class JudgementSubTableComponent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            components: [],
        }
    }

    componentWillMount () {
        axios.get('/judgments/')
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }


    render () {
        return (
            <table>
                <thead>
                    <th>1</th>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
        );
    }
}