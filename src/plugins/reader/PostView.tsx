import * as React from 'react';
import styled from 'styled-components'

const PostContainer = styled.div`
    display: grid;
    width: 80%;
    margin: 2.5rem auto;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: auto;
    grid-template-areas:
    "t t"
    "b b"
    "i i"
    "c c"
    "f f";
`;
const Title = styled.div`
    grid-area: t;
    text-align: left;
    font-size: 6em;
    color: #f0f0f0;
    padding-bottom: 1.5rem;
`;
const Banner = styled.div`
    grid-area: b;
    width: 100%;
    height: 3rem;
    background: white;
    border-radius: 0.25rem;
`;
const Info = styled.div`
    grid-area: i;
    padding: 1rem;
    font-size: 0.75rem;
`;
const Content = styled.div`
    grid-area: c;
    padding: 2rem 0;
    font-size: 1.25rem;
`;
const Footer = styled.div`
    grid-area: f;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,0.1);
`;

export interface IPost {
    title: string;
    content: string;
    author: string;
    metadata: any;
}

interface IProps {
    query: any;
}
interface IState {
    post: IPost | null;
    expanded: boolean;
}

export class PostView extends React.Component<IProps, IState> {

    componentWillMount() {
        this.setState({
            post: null,
            expanded: false
        });
    
        this.fetchPost(this.props.query);
    }

    fetchPost(query: any) {
        const formData = JSON.stringify(query);

        fetch('/fetch', {
            method: 'post',
            body: formData,
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async (response: any) => {
            const post = await response.json();
            console.log('post: ', post);

            this.setState({
                post
            });
        });
    }

    expand() {
        if (this.state.expanded)
            return;
    }

    render() {
        if (this.state.post == null)
            return (
                <div>{/* loading */}</div>
            )

        return (
            <PostContainer>
                <Title className="title">{ this.state.post.title }</Title>
                <Banner />
                <Info />
                <Content>{ this.state.post.content }</Content>
                <Footer />
            </PostContainer>
        )
    }
}