// 上一層直接傳 videos，這裏直接解構出 videos 下的 key
// 也可以用 function 建構 stateless component
function UserVideos({ likes }) {
    return (
        <div>
            <h4>UserVideos</h4>
            {
                likes.map(videoUrl => {
                    // 注意這裡的 src 不用""將 URL 包住，因為這不是真的 iframe，
                    // 而是 jsx 內的 iframe
                    return (<iframe src={videoUrl} key={videoUrl}></iframe>)
                })
            }
        </div>

    )
}

export default UserVideos;