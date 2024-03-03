import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 30px 20px 30px 20px; 
    background-color: black;
    justify-content: end;

    input {
        margin-right: 10px;
        border-radius: 10px;
        font-size: 20px;
    }
`;

const Button = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    border-radius:5px;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }
`

const InputContainer = styled.div`
    /* float: right;
    margin-bottom: 20px; */
`

export { Container, Button, InputContainer}