import styled from 'styled-components'
import backgroundImg from '../../assets/img.png'

export const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 146px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};;
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
        align-self: flex-start;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};;
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};;
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    filter: opacity(0.4);
`;