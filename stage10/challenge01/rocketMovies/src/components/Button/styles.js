import styled from 'styled-components'

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PRIMARY};
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    background-color: ${({theme, toDelete}) => toDelete ? theme.COLORS.BACKGROUND_BLK : theme.COLORS.PRIMARY};
    color: ${({theme, toDelete})            => toDelete ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND_800};


    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:disabled{
        opacity: 0.5;
        cursor: context-menu;
    }

    > svg{
        height: 26px;
        width: auto;
    }
`;