import React, { Component } from 'react';

const enhanced = (TargetComponent, Context) => {
    return class extends Component {
        static contextType = Context;

        render = () => {
            return (
                <TargetComponent {...this.props} {...this.context}></TargetComponent>
            )
        }
    }
}

export default enhanced;