import styled from 'styled-components'

export const Container = styled.section`
    grid-area: search;
    width: 80%;
    margin: 28px auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    > h2 {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 32px;
        font-weight: 400;
    }

    > Button {
        width: 207px;
    }
`;
