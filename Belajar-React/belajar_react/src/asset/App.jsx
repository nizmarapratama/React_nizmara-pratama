import "/App.css"
import Home from "./Home.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            data: [
                {
                    title:"1",
                    isRemove: false
                },
                {
                    title:"2",
                    isRemove:false
                },
                {
                    title:"3",
                    isRemove:false
                },
                {
                    title:"2",
                    isRemove:false
                }
            ],
            isShow: true
        };
    }

    componentDidMount() {...}

    componentDidUpdate(prevProps:Readonly<p>, prevState :Readonly<S>) {}

    handLeChangeItBackground(index) {
        const updateData = [...this.state.data];
        updateData[index].isRemove = !updateData[index].isRemove;
        this.setState(state{
            data: updateData
        });
    }

    render () {
        return (
            <div>
                {
                    this.state.map(num, index) => {
                        return <Home key={index}
                        handLeChangeItBackground={() => this.handLeChangeItBackground(index)}
                        isRemove={num.isRemove}
                        title={num.title}/>;
                })
                }
            </div>
        );
        
    }
}
