import styled from 'styled-components';

const StatList = styled.ul`
  list-style: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`;

const StatItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StatText = styled.p`
  color: ${props => {
    switch (props.type) {
      case 'good': {
        return 'greenyellow';
      }
      case 'neutral': {
        return 'yellow';
      }
      case 'bad': {
        return 'red';
      }
      case 'total': {
        return 'violet';
      }
      case 'positivePercentage': {
        return 'aquamarine';
      }
      default: {
        return 'white';
      }
    }
  }};

  text-transform: ${p => {
    switch (p.type) {
      case 'total': {
        return 'uppercase';
      }
      case 'positivePercentage': {
        return 'uppercase';
      }
      default: {
        return 'capitalize';
      }
    }
  }};
`;

export { StatItem, StatText, StatList };
