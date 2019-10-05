import User from "./user.json"
import UserEditor from "./UserEditor.jsx"
import UserVideos from "./UserVideos.jsx"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: User,
        }
    }

    handler = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state)
        })
    }

    render = () => {
        return (
            <div>
                <h1>TW</h1>
                {/* 注意前者，不使用 key 直接傳入，使接收的 function 可以直接解構 */}
                {/* 後者只是範例，示範一般用 key 的傳法 */}
                {/* 因應範例需求已取消，這裡留下註解 */}
                {/* <UserEditor {...this.state.user} handler={this.handler}/> */}
                <UserEditor user={this.state.user} handler={this.handler} />

                {/* 這裏除了不用 key 外，還直接指定了要傳的值 */}
                <UserVideos {...this.state.user.videos} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'))