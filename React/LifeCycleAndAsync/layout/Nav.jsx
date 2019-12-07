import React, {Component} from "react";

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    linkHandler = (event) => {
        event.preventDefault();

        const {href} = event.target;
        const {pathService} = this.props;
        pathService.setPath(href);
    }

    createPageLinks = (navRoutes) => {
        return navRoutes.map((navRoute) => {
            return <li key={navRoute.name}>
                <a href={navRoute.url} onClick={this.linkHandler}>{navRoute.name}</a>
            </li>
        })
    }

    shouldComponentUpdate = (nextProps, nextState, nextContext) => {
        // 存在 state 變化，在 render 之前 若 return false，則會擋住接下來的 state 變化 因此也就不會再 render
        // 若使用者有登入，Nav 才會再 render
        if (this.props.user != nextProps.user) {
            return true
        }
        return false
    }

    render = () => {
        const {navRoutes} = this.props
        const links = this.createPageLinks(navRoutes)

        return (
            <ul>
                {links}
            </ul>
        )
    }
}

export default Nav;