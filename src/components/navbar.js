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
				<SubMenuContainer>
					<SubMenu>
						<SubMenuItem>Number 1</SubMenuItem>
						<SubMenuItem>Number 2</SubMenuItem>
					</SubMenu>
				</SubMenuContainer>
			</NavItem>

			<NavItem
				href="/projects"
				rel="noopener noreferrer"
			>
				<h2>Projects</h2>
				<SubMenuContainer>
					<SubMenu>
						<SubMenuItem>Number 1</SubMenuItem>
						<SubMenuItem>Number 2</SubMenuItem>
					</SubMenu>
				</SubMenuContainer>
			</NavItem>
			<NavItem
				href="/services"
				rel="noopener noreferrer"
			>
				<h2>Service</h2>
				<SubMenuContainer>
					<SubMenu>
						<SubMenuItem>Number 1</SubMenuItem>
						<SubMenuItem>Number 2</SubMenuItem>
					</SubMenu>
				</SubMenuContainer>
			</NavItem>

			<NavItem
				href="/contact"
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>Contact</h2>
				<SubMenuContainer>
					<SubMenu>
						<SubMenuItem>Number 1</SubMenuItem>

						<SubMenuItem>Number 2</SubMenuItem>
					</SubMenu>
				</SubMenuContainer>
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
	/* justify-content: flex-end;
	align-items: flex-end; */
	border: 2px solid white;
`;

const SubMenuContainer = styled.div`
	/* position: absolute; */
	/* top: 100%; */
	/* left: 0%; */
`;

const NavItem = styled(Link)`
	position: relative;
	padding: 0.5em 2em 0.5em 2em;
	text-decoration: none;
	font-family: 'CeraPro', sans-serif;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;

	h2 {
		margin: 0;
	}

	&:hover {
		h2::before {
			width: 100%;
		}
	}

	&:hover ${SubMenuContainer} {
		/* Show the SubMenuContainer on hover */
		height: auto;
	}

	h2::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: white;
		transition: width 0.7s ease;
	}
`;



const SubMenu = styled.ul`
	/* position: absolute;
	top: 100%;
	left: 0;
	width: 120px; */
	background-color: rgba(169, 169, 169, 0.5);
	opacity: 0; /* Initially hidden */
	pointer-events: none; /* Initially not clickable */
	transition: opacity 0.3s ease;

	${NavItem}:hover & {
		opacity: 1; /* Show the submenu when SubMenuContainer is hovered */
		pointer-events: auto;
	}
`;

const SubMenuItem = styled.li`
	padding: 0.5em;
	color: white;
	cursor: pointer;

	&:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}
`;
