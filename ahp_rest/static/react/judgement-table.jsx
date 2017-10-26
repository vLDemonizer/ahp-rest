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
                    <td></td>
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(
    <JudgementSubTableComponent />,
    document.getElementById('react-root')
);