import { useEffect, useState } from "react"
import PostCreation from "../../components/PostCreation"
import Timeline from "../../components/Timeline"
import api from "../../config/api"
import * as S from "./styles"

const Posts = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getPosts();
        const interval = setInterval(() => {
            getPosts();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getPosts = async () => {
        try {
            const { data } = await api.get('/timeline')
            setPosts(data)
        } catch (error) {
            alert('An error occured while trying to fetch the posts, please refresh the page')
        }
    }

    return (
        <S.Container>
            <S.Title>timeline</S.Title>
            <PostCreation imageUrl={"https://static.poder360.com.br/2021/08/Lula-Boxe-2-868x644-1-e1629756322652.png"} />
            <Timeline posts={posts} />
        </S.Container>
    )
}

export default Posts