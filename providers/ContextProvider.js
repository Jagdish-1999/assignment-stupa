"use client";
import React, { createContext, useState } from "react";

import styles from "./contextProvider.module.css";

export const DARK = "dark";
export const WHITE = "white";
export const MyContext = createContext({});

const ContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(WHITE);

	const contextValue = {
		theme,
		setTheme,
	};

	return (
		<MyContext.Provider value={contextValue}>
			<div
				className={`${theme === WHITE ? "dark-theme" : "white-theme"} ${
					styles.container
				}`}>
				{children}
			</div>
		</MyContext.Provider>
	);
};

export default ContextProvider;
