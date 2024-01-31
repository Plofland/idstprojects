import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import Navbar from '@/components/navbar';
import ResetStyles from '@/styles/globals';

export default function Home() {
	return (
		<>
			<Head>
				<title>IDST Projects</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ResetStyles />
			<main>
				<NavContainer>
					<Navbar />
				</NavContainer>
				<HeroSection>
					<HeroImage
						src="/luxury-builder-new-york-city-04.jpg"
						alt="Hero Image Alt Text"
						layout="fill"
						objectFit="cover"
					/>
					<HeroContent>
						<h1>Your Hero Content Goes Here</h1>
						<p>
							Additional information or
							call-to-action
						</p>
					</HeroContent>
				</HeroSection>
        {/* <Content /> */}
			</main>
		</>
	);
}

const NavContainer = styled.div`
	background-color: #333;
	color: white;
	padding: 10px;
	position: fixed;
	width: 100%;
	z-index: 100; 
`;



const HeroSection = styled.section`
	position: relative;
	height: 100vh;
`;

const HeroImage = styled(Image)`
	/* Optional: Apply additional styles to the image if needed */
`;

const HeroContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	color: #fff; /* Set text color */
`;

const Content = styled.div`
height: 100vh;

`;