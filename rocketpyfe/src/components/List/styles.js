import styled from 'styled-components'

export const Container = styled.div`

padding: 0 15px;
height: 100%;
flex: 0 0 320px;
opacity: ${props => props.done ? 0.6 : 1}
background:#ebecf0;

& + div{
border-left:10px solid rgba(255,255,255,0.5);
}
header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    heigth:42px;

h2{
    font-weight: 500;
    font-size:16px;
    padding: 0 10px;
}

button{
    width: 35px;
    height: 35px;
    border-radius: 18px;
    background:#3b5bfd;
    border:0;
    margin-bottom:5px;
    cursor:pointer;
}

ul{
    margin-top: 30px;
}
}
`;