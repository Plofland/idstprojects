import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Container>
			<NavItem
				href="/about"
				rel="noopener noreferrer"
			>
				<h2>About</h2>
			</NavItem>

			<NavItem
				href="/projects"
				rel="noopener noreferrer"
			>
				<h2>Projects</h2>
			</NavItem>

			<NavItem
				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>Contact</h2>
			</NavItem>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	display: flex;
	grid-template-columns: repeat(4, minmax(25%, auto));
	max-width: 100vw;
	width: 100%;
	justify-content: flex-end;
	align-items: flex-end;
	border: 2px solid white;
`;

const NavItem = styled(Link)`
	border: 1px solid black;
	padding: .5em 2em .5em 2em;
`;
