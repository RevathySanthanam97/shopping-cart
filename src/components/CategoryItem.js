import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
`

const Image = styled.img`
    width: 100%;
`;

const Info = styled.div`
        flex: 1;
        padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
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
