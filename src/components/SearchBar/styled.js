import styled from "styled-components";

const Container = styled.div`

    
        input {
        margin-right: 10px;
        border-radius: 10px;
        font-size: 20px;
    }
`;

const Button = styled.button`
    background-color: gray;
    color: black;
    font-size: 20px;
    border-radius:5px;
    cursor: pointer;
    font-family: 'get_schwifty';

    &:hover {
        background-color: black;
        color: white;
    }
`

const InputContainer = styled.div`
    /* float: right;
    margin-bottom: 20px; */
`

export { Container, Button, InputContainer}