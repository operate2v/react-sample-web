import styled from 'styled-components';
import { colors } from '../../constants';

const MessageView = styled.div`
  width: 300px;
  height: 40px;
  color: #333;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px 4px rgba(40, 40, 40, 0.3);
  border-radius: 50px;
  transition-property: color, background;
  transition-duration: .2s;
  transition-timing-function: linear;
  &:hover {
    background: ${colors.brightSkyBlue};
    color: ${colors.white};
  },
`;
export default MessageView;
