import React, {Component} from "react";
import { Link } from "react-router-dom";

import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
  import MaterialIcon from '@material/react-material-icon';
  import Drawer, {DrawerAppContent} from '@material/react-drawer';

  

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    // ## 因引入 React Router 而不需要
    // linkHandler = (event) => {
    //     event.preventDefault();

    //     const {href} = event.target;
    //     const {pathService} = this.props;
    //     pathService.setPath(href);
    // }

    // createPageLinks = (navRoutes) => {
    //     return navRoutes.map((navRoute) => {
    //         return <li key={navRoute.name}>
    //             <a href={navRoute.url} onClick={this.linkHandler}>{navRoute.name}</a>
    //         </li>
    //     })
    // }

    // shouldComponentUpdate = (nextProps, nextState, nextContext) => {
    //     // 存在 state 變化，在 render 之前 若 return false，則會擋住接下來的 state 變化 因此也就不會再 render
    //     // 若使用者有登入，Nav 才會再 render
    //     if (this.props.user != nextProps.user) {
    //         return true
    //     }
    //     return false
    // }

    // render = () => {
    //     const {navRoutes} = this.props
    //     const links = this.createPageLinks(navRoutes)

    //     return (
    //         <ul>
    //             {links}
    //         </ul>
    //     )
    // }

    closeDrawer = () => {
        this.setState({open: false})
    }

    render = () => {
        return (
            // 用 React.Fragment 而非 div 的原因是因為這裡若使用 div 會多出空格，而且這裡 div 不必要
            <React.Fragment>
                 <Drawer
                modal
                open={this.state.open}
                onClose={this.closeDrawer}
                >
                    <nav>   
                        <ul>
                            <li>
                                {/* Link 是能夠替代並阻擋原先 Html a 的語意與跳頁 */}
                                <Link to="/" onClick={this.closeDrawer}>Home</Link>
                            </li>
                            <li>
                                <Link to="/products/" onClick={this.closeDrawer}>Products</Link>
                            </li>
                            {
                                this.props.userService.isLoggedIn() ? (
                                    // 這裡的 div 會導致 CSS 樣式錯亂，
                                    // 但 React 要求一定每個 render 要包在一個標籤下
                                    // 因此這裡使用 React.Fragment，可以包但不影響架構
                                    <React.Fragment>
                                        <li>
                                            <Link to="/cart/" onClick={this.closeDrawer}>Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/user/" onClick={this.closeDrawer}>Profile</Link>
                                        </li>
                                    </React.Fragment>
                                ) : (
                                    <li>
                                        <Link to="/user/login" onClick={this.closeDrawer}>Log In</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </Drawer>
                <div>

                {/* 
                這段是 Material UI 預設用來開關 Drawer 的，將其使用於 TopAppBar 的按鈕
                <button onClick={() => this.setState({open: !this.state.open})}>
                    {this.state.open ? 'Open' : 'Close'} Drawer
                </button> */}
                </div>
                <TopAppBar>
                    <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                        <MaterialIcon hasRipple icon='menu' onClick={() => this.setState({open: !this.state.open})}/>
                        </TopAppBarIcon>
                        <TopAppBarTitle>Miami, FL</TopAppBarTitle>
                    </TopAppBarSection>
                    <TopAppBarSection align='end' role='toolbar'>
                        <TopAppBarIcon actionItem tabIndex={0}>
                        <MaterialIcon 
                            aria-label="print page" 
                            hasRipple 
                            icon='print' 
                            onClick={() => console.log('print')}
                        />
                        </TopAppBarIcon>
                    </TopAppBarSection>
                    </TopAppBarRow>
                </TopAppBar>
            </React.Fragment>
        )
        
    }
}

export default Nav;