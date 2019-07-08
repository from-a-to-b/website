import styled from 'styled-components';
import mixins from './mixins';

const FullContainer = styled.section`
  padding: 20px;
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  width: calc(50% - 25px);

  p { 
    font-size:1.2em;
    margin-bottom: 30px;
    max-width: 600px;
  }

  a {
    text-decoration: underline;
    text-decoration-color: #777;
  }
`;

const Container = styled.section`

  padding: 20px;
  width: calc(1000px - 40px);
  
  display: flex;
  justify-content: space-between;
`;

const Subtitle = styled.h2`
  ${mixins.DRUK_TEXT_TYPE}
  font-size:2.0em;
  text-align: center;
  margin: 20px 0;
`;

const AppleBox = styled.div`
  height: 200px;
`

export {
  AppleBox,
  FullContainer,
  Container,
  Subtitle,
  Column,
};