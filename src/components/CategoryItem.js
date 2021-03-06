import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
width: 100%;
position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
`;

const Title = styled.h1`
color: #ffffff;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 10px;
color: gray;
background-color: white;
cursor: pointer;
font-weight: 600;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
