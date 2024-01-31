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
				href="/services"
				rel="noopener noreferrer"
			>
				<h2>Service</h2>
			</NavItem>

			<NavItem
				href="/contact"
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
	position: relative;
	padding: 0.5em 2em 0.5em 2em;
	text-decoration: none;
	font-family: 'CeraPro', sans-serif;

	h2 {
		margin: 0;
	}

	&:hover {
		h2::before {
			width: 100%; /* Expand the pseudo-element to reveal the border-bottom */
		}
	}

	h2::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0; /* Initially, the pseudo-element is hidden */
		height: 2px; /* Height of the border-bottom */
		background-color: white;
		transition: width 0.5s ease; /* Transition effect over 500ms */
	}
`;
