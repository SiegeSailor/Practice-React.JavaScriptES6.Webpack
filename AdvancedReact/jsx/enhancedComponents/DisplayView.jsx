import DisplayView from "./../components/DisplayView.jsx"
import CounterContext from './../contexts/counterContext.jsx'
import enhanced from './../hoc/enhanced.jsx'

// 外接 HOC 的寫法
const EnhancedDisplayView = enhanced(DisplayView, CounterContext)

export default EnhancedDisplayView;