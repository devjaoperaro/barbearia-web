import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    span {
        background: #ff9000;
        width: 160px;
        padding: 8px;
        border-radius: 4px;
        font-size: 14px;
        font-weight: 500;

        position: absolute;
        bottom: calc(100% + 12px);
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
        transition: opacity 0.4s;
        visibility: hidden;

        color: #312e38;

        &::before {
            content: '';
            border-color: #ff9000 transparent;
            border-style: solid;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &:hover span{
        opacity: 1;
        visibility: visible;
    }
`;