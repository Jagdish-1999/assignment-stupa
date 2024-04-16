import React from "react";
import Image from "next/image";
import styles from "./homePage.module.css";

const HomePage = () => {
	return (
		<div className={styles.container}>
			<Image
				src="/assets/dog.png"
				alt="dog"
				width={500}
				height={500}
				className={styles.img}
				priority
			/>
			<h1 className={styles.h1} data-text="DOG">
				DOG
			</h1>
		</div>
	);
};

export default HomePage;
