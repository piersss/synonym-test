import { FC, ReactElement } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

import Button from '../../components/Button/Button';

import './Header.scss';

interface HeaderProps {
    title: string;
    className?: string;
}

const Header: FC<HeaderProps> = ({ title, className = '' }): ReactElement => (
    <div className={`header ${className}`}>
        {title}

        <Button>
            <RxHamburgerMenu />
        </Button>
    </div>
);

export default Header;
