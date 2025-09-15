import styles from "./Home.module.css";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";

import Me from "../../assets/Me.png";

import portfolio from "../../assets/Cards/portfolio.svg";
import linkedin from "../../assets/Cards/linkedin.svg";
import openclassrooms from "../../assets/Cards/openclassrooms.svg";
import cv from "../../assets/Cards/CV.png";
import github from "../../assets/Cards/GitHub.png";

export default function Home() {
	const links = [
		{
			title: "Mon Portfolio",
			url: "https://portfolio-charles-catto.vercel.app/",
			img: portfolio,
		},
		{
			title: "Mon LinkedIn",
			url: "https://www.linkedin.com/in/charles-catto/",
			img: linkedin,
		},
		{
			title: "Voir mon CV",
			url: "/Openclassroom-Linktree/CV-Charles_Catto.pdf",
			img: cv,
		},
		{
			title: "Programme Formation OpenClassroom",
			url: "https://openclassrooms.com/fr/paths/527-developpeur-dapplication-android",
			img: openclassrooms,
		},
		{
			title: "Mon GitHub",
			url: "https://github.com/CharlesCatto",
			img: github,
		},
	];

	return (
		<div className={styles.container}>
			<img src={Me} alt="Moi" className={styles.profileImage} />
			<h1 className={styles.title}>Bienvenue sur mon Linktree</h1>
			<div className={styles.cardsWrapper}>
				{links.map((link) => (
					<ProfileCard
						key={link.title}
						title={link.title}
						url={link.url}
						img={link.img}
					/>
				))}
			</div>
		</div>
	);
}
