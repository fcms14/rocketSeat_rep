import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 80%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    
    h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    div {
        display: flex;
    }
`;

export const Search = styled.div`
    width: 60%;
`;

export const User = styled.div`

    display: flex;
    flex-direction: column;

    align-self: center;
    text-align: right;
    margin-right: 16px;
    line-height: 24px;

    span {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;


export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 28px;
    }
`;