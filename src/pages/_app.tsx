import React from 'react';
import { wrapper } from '@/store/store';
import { AppProps } from 'next/dist/next-server/lib/router/router';

const App: React.FC<AppProps> = ({Component}) => (
         <>
             <Component/>
         </>
);

export default wrapper.withRedux(App);