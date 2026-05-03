// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "Blog",
		title: "哈雷0V0的博客",
		description:
			"A blog used Mizuki theme.",
		image: "",
		category: "web",
		techStack: ["Gmeek", "Blog", "Theme", "哈雷0V0"],
		status: "completed",
		liveDemo: "https://halei0v0.github.io",
		sourceCode: "https://github.com/halei0v0.github.io",
		startDate: "2025-10-08",
		featured: true,
		tags: ["Blog", "Theme", "哈雷0V0"],
	},
	{
		id: "Warehouse",
		title: "哈雷0V0的仓库",
		description:
			"我的文件发布页~",
		image: "",
		category: "web",
		techStack: ["仓库", "资源发布","Html"],
		status: "completed",
		liveDemo: "https://halei0v0.github.io/warehouse",
		sourceCode: "https://github.com/halei0v0/warehouse",
		startDate: "2025-09-01",
		endDate: "2025-10-01",
		featured: true,
		tags: ["仓库", "资源发布"],
	},
	{
		id: "task-blog-exe",
		title: "Task Blog exe",
		description:
			"Create blog by AI.",
		image: "",
		category: "mobile",
		techStack: ["Blog", "AI"],
		status: "in-progress",
		startDate: "2024-03-01",
		tags: ["Blog", "AI"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
