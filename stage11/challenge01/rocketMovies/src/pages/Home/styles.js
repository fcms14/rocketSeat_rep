import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    /* grid-template-columns:  250px auto; */
    grid-template-rows:  105px 128px auto 64px;
    grid-template-areas: 
    "header"
    "search"
    "content"
    "content";

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};    
`;


export const Content = styled.div`
    width: 80%;
    margin: 0 auto;
    grid-area: content;
    padding-right: 5px;
    overflow-y: auto ;

    ::-webkit-scrollbar {
        width: 20px;
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
    }

    ::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        background-clip: padding-box;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        border-radius: 10px;
    }
`;


export const NewNote = styled(Link)`
    grid-area: newnote;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        margin-right: 8px;
    }
`;

