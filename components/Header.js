"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DARK, MyContext, WHITE } from "@/providers/ContextProvider";
import Dark from "@/icons/Dark";
import Light from "@/icons/Light";
import MenuIcon from "@/icons/MenuIcon";
import { headerData } from "@/contstants/data";
import styles from "./header.module.css";

const Header = () => {
	const pathname = usePathname();
	const { theme, setTheme } = useContext(MyContext);
	const fill = theme === DARK ? "#000" : "#fff";
	const [menuClicked, setMenuClicked] = useState(false);
	const [isSelected, setIsSelected] = useState(pathname);

	return (
		<div
			className={`${theme === WHITE ? "dark-theme" : "white-theme"} ${
				styles.container
			}`}>
			<div className={styles.navigation}>
				<div
					className={`${styles.clickableIcon} ${styles.mediaMenu}`}
					onClick={() => setMenuClicked((prev) => !prev)}>
					<MenuIcon fill={fill} />
				</div>
				<ul
					className={`${menuClicked ? styles.mobileMenu : styles.list} ${
						menuClicked ? "" : styles.mediaList
					} ${theme === WHITE ? "dark-theme" : "white-theme"}`}>
					{headerData.map((header) => (
						<li
							key={header.id}
							onClick={() => {
								setMenuClicked(false);
								setIsSelected(header.href);
							}}
							className={`${
								header.href === isSelected ? styles.isSelected : ""
							}`}>
							<Link href={header.href}>
								<span>
									<header.icon fill={fill} />
								</span>
								{header.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<div
					className={styles.clickableIcon}
					onClick={() =>
						setTheme((prevTheme) => (prevTheme === WHITE ? DARK : WHITE))
					}>
					{theme === DARK ? <Light fi /> : <Dark fill="#fff" />}
				</div>
			</div>
		</div>
	);
};

export default Header;
