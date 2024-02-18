import { FC, PropsWithChildren, ReactElement } from 'react';

import Header from '../../compositions/Header/Header';

import './Page.scss';

interface PageProps {
    className?: string;
}

const Page: FC<PropsWithChildren<PageProps>> = ({ className = '', children }): ReactElement => (
    <div className={`page ${className}`}>
        <div className="page__background-gradient" />

        <div className="page__content">
            <Header title="Configure" />

            {children}
        </div>
    </div>
);

export default Page;
