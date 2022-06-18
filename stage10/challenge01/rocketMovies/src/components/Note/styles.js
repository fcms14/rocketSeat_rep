import styled from 'styled-components'


export const Author = styled.div`

    display: flex;

    padding: 10px 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    

    > img {
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100} ;
        margin-right: 10px;
    }

    > span {
        margin-left: 5px;
    }

    > svg {
        margin: 2px 5px 0 20px;
        
        color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
`;


export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    border: none;    
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 16px;

    text-align: right;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        display: flex;
        justify-content: space-between;

        > svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        width: 20px;
        height: auto;
        cursor: pointer;
        transition: all 300ms;
        }

        > svg:hover {
            /* width: 40px; */
            transform: scale(1.2);            
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    > h2 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.PRIMARY};

        > svg{
            color: ${({ theme }) => theme.COLORS.PRIMARY};            
        }

        > .rated {
            fill:  ${({ theme }) => theme.COLORS.PRIMARY};
        }
    }
    
    > p  {
        flex: none;
        order: 1;
        align-items: stretch;
        flex-grow: 0;

        text-align: justify;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        cursor: pointer;

        height: 40px;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;


        @supports (-webkit-line-clamp: 2) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        transition: all 800ms;

    }

    > p:hover{
        height: 80px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        @supports (-webkit-line-clamp: 4) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }
    }

    > p:active{
        height: auto;
        min-height: 80px;
        white-space: initial;
        text-overflow: initial;
        overflow: hidden;


        @supports (-webkit-line-clamp: initial) {
            overflow: hidden;
            text-overflow: initial;
            white-space: initial;
            display: -webkit-box;
            -webkit-line-clamp: initial;
            -webkit-box-orient: initial;
        }
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }


`;
