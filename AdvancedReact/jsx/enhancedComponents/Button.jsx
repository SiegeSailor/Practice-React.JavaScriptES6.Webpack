import Button from "./../components/Button.jsx"
import CounterContext from './../contexts/counterContext.jsx'
import enhanced from './../hoc/enhanced.jsx'

// 外接 HOC 的寫法
const EnhancedButton = enhanced(Button, CounterContext)

// 獨立出來的寫法，不推薦
// class EnhancedButton extends Component {
//     render = () => {
//         return (
//             <Button {...this.props} {...this.context}></Button>
//         )
//     }
// }
// EnhancedButton.contextType = CounterContext;

export default EnhancedButton;