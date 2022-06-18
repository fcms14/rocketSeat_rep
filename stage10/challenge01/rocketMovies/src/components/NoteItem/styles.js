import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme, isNew }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none" } ;

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    width: 19%;
    min-width: 220px;
    /* border: 1px solid red; */

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({ theme, isNew }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme, isNew }) => theme.COLORS.GRAY_300};
        }

    }
    > button {        
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme, isNew }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme, isNew }) => theme.COLORS.PRIMARY};
    }

`;
