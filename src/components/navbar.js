import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<Container>
			<Link href="/about" rel="noopener noreferrer">
				<h2>About</h2>
			</Link>

			<Link
				href="/projects"
				rel="noopener noreferrer"
			>
				<h2>Projects</h2>
			</Link>
			<a
				href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				rel="noopener noreferrer"
			>
				<h2>Templates</h2>
			</a>

			<Link
				href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>Contact</h2>
			</Link>
		</Container>
	);
};

export default Navbar;


export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(25%, auto));
	max-width: 100vw;
	width: 66%;
	justify-content: flex-end;
	border: 2px white;
`;