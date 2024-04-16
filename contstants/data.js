import About from "@/icons/About";
import Events from "@/icons/Events";
import HomeIcon from "@/icons/HomeIcon";
import LiveIcon from "@/icons/LiveIcon";
import Register from "@/icons/Register";
import Rocket from "@/icons/Rocket";
import VideoIcon from "@/icons/VideoIcon";

export const headerData = [
	{ id: "space", href: "/my-space", title: "My Space", icon: Rocket },
	{ id: "home", href: "/", title: "Home", icon: HomeIcon },
	{ id: "events", href: "/events", title: "Events", icon: Events },
	{ id: "videos", href: "/videos", title: "Videos", icon: VideoIcon },
	{ id: "go-live", href: "/go-live", title: "Live", icon: LiveIcon },
	{ id: "about-us", href: "/about-us", title: "About Us", icon: About },
	{ id: "register", href: "/register", title: "Register", icon: Register },
];
