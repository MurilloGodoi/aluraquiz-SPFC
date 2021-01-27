import styled from 'styled-components'

const WidgetQuiz = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid white;
  background-color: red;
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

WidgetQuiz.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: black;
  
  * {
    margin: 0;
  }
`;

WidgetQuiz.Content = styled.div`
background-color: black;
padding: 24px 32px 32px 32px;
& > *:first-child {
  margin-top: 0;
}
& > *:last-child {
  margin-bottom: 0;
}
ul {
  list-style: none;
  padding: 0;
  background-color:red;
}
label {
  background-color:red;
}
button {
  margin-top: 10px;
  background-color:red;
}
.loading {
    width: 10px;
    height: 100px;
}
`;

WidgetQuiz.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default WidgetQuiz;