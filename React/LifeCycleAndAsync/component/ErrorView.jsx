import React from "react";

const ErrorView = ({error}) => {
    return (
        // 因為傳入的由 fetch 的 throw Error 來的 this.state.error 其實是一個 object
        <h1>Error: {error.message}</h1>
    )
}

export default ErrorView