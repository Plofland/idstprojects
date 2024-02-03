import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const MobileNavMenu = () => {
	return (
		<MobileMenu >
			<MenuItem id="about" href="/about">
				About
			</MenuItem>
			<MenuItem id="projects" href="/projects">
				Projects
			</MenuItem>
			<MenuItem href="/services">Services</MenuItem>
			<MenuItem id="contact" href="/contact">
				Contact
			</MenuItem>
		</MobileMenu>
	);
};

export default MobileNavMenu;

const MobileMenu = styled.div`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(55, 55, 55, 0.8); 
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1); 
`;

const MenuItem = styled(Link)`
  font-size: 16px;
`;

