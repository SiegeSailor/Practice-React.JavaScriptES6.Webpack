// 注意傳入的方式，這裏不用 key 傳入、變為可以直接解構的方式
// 因應 hanler 需求已取消，留下註解
// function UserEditor({ id, description, email, name, handler })

const UserEditor = ({ user, handler }) => {
    const { id, description, email, name } = user

    let textareaHandler = (event) => {
        const { name, value } = event.target
        handler("user", { ...user, [name]: value })
    }

    return (
        <div>
            <h4>UserEditor</h4>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <textarea
                value={description}
                onChange={textareaHandler}
                name="description" id="" cols="30" rows="10">

            </textarea>
            <p>{description}</p>
        </div>
    )
}

export default UserEditor;