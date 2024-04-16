import React from "react";
import Image from "next/image";

const CustomImage = ({ onClick, src, className, alt }) => {
	return (
		<div>
			<Image
				src={src}
				alt={alt}
				width={500}
				height={500}
				priority
				className={className}
				onClick={onClick ? onClick : () => null}
			/>
		</div>
	);
};

export default CustomImage;
