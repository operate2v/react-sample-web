import styled from 'styled-components';
import IsScale from '../utils/is-scale';

const DownloadButton = styled.div`
  width: ${IsScale ? 100 : 35};
  height: ${IsScale ? 60 : 20};
  color: #333;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 8px 1px rgba(80, 80, 80, 0.3);
  border-radius: 5px;
  transition-property: color, transform;
  transition-duration: .2s;
  transition-timing-function: linear;
  &:hover {
    transform: translateY(-4px);
    color: #3333ff;
  },
`;
export default DownloadButton;
