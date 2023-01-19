import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App() {
  return (
    <div>
      <h1> Kennya Alexandra Orona Cumplido</h1>
    <Button as= "a" href="https://utd.edu.mx/">UTD</Button>
    <Button as= "a" href="https://github.com/kennya2709/Hola_Angular"primary>GitHub</Button>
    <Button as= "a" href="https://www.facebook.com/alex.orona.5496"primary>Red social</Button>
  </div>
  );
}
