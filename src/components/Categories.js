import styled from 'styled-components';
import { categories } from "../data";
import CategoryItem from './CategoryItem';
const Container = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
`
const Categories = () => {

    return (
        <Container>
            {categories.map(item => 
                <CategoryItem item={item}/>
            )}
        </Container>
    )
}

export default Categories