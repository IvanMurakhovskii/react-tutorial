import styled from '@emotion/styled';
import React, { FC } from 'react';

interface RowProps {
    left: React.ReactNode,
    leftFlexBasic: number,
    right: React.ReactNode,
    rightFlexBasic: number
}

const Container = styled.div`
    display: flex;
    flex-wrap: row;
    margin:auto
`;

const LeftCol = styled.div<RowProps>`
    flex: 0 1 ${(props) => `${props.leftFlexBasic}%`}
`;

const RightCol = styled.div<RowProps>`
    flex: 0 1 ${(props) => `${props.rightFlexBasic}%`};
`;

const Row: FC<RowProps> = (props: RowProps) => {

    const { left, right } = { ...props }
    return (
        <Container>
            <LeftCol {...props}>
                {left}
            </LeftCol>
            <RightCol {...props}>
                {right}
            </RightCol>
        </Container>
    );
}

export default Row;