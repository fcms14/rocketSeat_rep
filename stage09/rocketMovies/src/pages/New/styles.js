import styled from 'styled-components'
import backgroundImg from '../../assets/img.png'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header"
     "content";

    > main {
        grid-area: content;
        overflow-y: auto;
    }

    .tags {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
`;

export const Form = styled.form`
    max-width: 80%;
    margin: 38px auto;

    display: flex;
    flex-direction: column;
    gap: 40px;

    > header {
        a {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.PRIMARY};
        }
        h1 {
            margin-top: 24px;
        }
    }

    > section{
        display: flex;
        align-items: flex-start;
        gap: 40px;

        > div{        
            width: 100%;
        }
    }

    > .marcadores{
        width: 100%;
        gap: 0;
        background-color: #0D0C0F;
        border-radius: 8px;

        > div{        
            width: auto;
            padding: 16px;
        }
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;