import styled from 'styled-components';

export const Item = styled.div`
    width: 335px;
    height: 141px;
    padding: 16px 16px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.20);
    background: rgba(239, 237, 232, 0.05);
`;

export const Subcategories = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
`;

export const Workout = styled.h4`
    padding: 5px 7.5px;
    color: var(--White-White, #FFF);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-radius: 4px;
    background: rgba(239, 237, 232, 0.05);
    margin: 0;
    height: 14px;

`;

export const Btn = styled.div`
   display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #E6533C;
    height: 18px;
`;

export const StartBtn = styled.button`
    width: 55px;
    height: 18px;
    margin: 0;
    color: #E6533C;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background: transparent;
    border: 0;
`;

export const NameExercise = styled.div`
   display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: #EFEDE8;
    height: 24px;
    margin-bottom: 8px;
`;
export const Name = styled.h5`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: #EFEDE8;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
`;

export const Information = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: rgba(239, 237, 232, 0.40);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;
export const InformName = styled.span`
    color: #EFEDE8;
`;

export const Container = styled.ul`
   margin: 0 auto;
   background: var(--black, #040404);
`;
