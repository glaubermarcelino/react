import styled,{css} from 'styled-components'

export const Container = styled.div`

position:relative;
background: #fff;
border-radius: 5px;
margin-bottom: 10px;
padding:15px;
box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
border-top: 30px solid rgba(168,177,121,0.4);
cursor: grab;

p{
    font-weight: 500;
}

header{
    position:absolute;
    top: -27px;
    left: 12px;
}


img{
    width:24px;
    height:24px;
    border-radius:2px;
    margin-top: 5px;
    border-radius:18px;
}

${props => props.isDragging && css`
border: 2px dashed rgba(0, 0, 0, 0.2);
padding-top: 31px;
border-radius: 0;
background: transparent;
box-shadow: none;
cursor: grabbing;
p, img, header {
  opacity: 0;
}
`}
`;
export const Label = styled.span`
width: 10px;
height: 10px;
border-radius: 2px;
display: inline-block;
background: ${props => props.color}

`;
export const Etiqueta=styled.span`
        border: 0;
        border-radius: 8px;
        padding: 0 5px 0 5px;
        font-size:12px;
        font-family: 'Roboto',sans-serif;
        margin: 0 0 0 3px;
        display:flex;
        color:whitesmoke;
        background: ${props => props.color};
`;