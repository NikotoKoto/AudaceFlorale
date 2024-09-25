import styled from 'styled-components'

export default function Button({onClick,label,className, Icon, ...extraProps}) {
  return (
    <ButtonStyled onClick={onClick} className={className}>
        <span>{label}</span>
        <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
width: 100%;
  border: 1px solid red;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative; //is used in case you want to create interactive icons where an icon replaces the text label.
  white-space: nowrap; //prevents the text label from wrapping to the next line.
  text-decoration: none; //removes the text decoration in case you’re applying the .btn class to a link.
  line-height: 1;
  cursor: pointer;
  margin: 20px 0;
  padding: 18px 24px;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 800;
  color: white;
  background-color: #0a0d30;
  border: 1px solid #0a0d30;

cursor: pointer;


.icon{
    padding-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    
}

&:hover{
    background: white;
    color: #0a0d30;
}

&:active{
    transform: scale(0.95);
}

`