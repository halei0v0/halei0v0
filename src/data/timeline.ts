import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "初中",
		title: "人生中第一台电脑",
		description:
			"自己装的13600KF+RTX4070Ti",
		type: "achievement",
		startDate: "2023-06-01",
		skills: ["Computer", "装机"],
		achievements: [
			'自主装机一次点亮~',
			"想买个nas玩玩~【没有】",
			"想玩机架式服务器~~【没有】",
		],
		icon: "mdi:trophy",
		color: "#3a88edff",
	},
	{
		id: "高中",
		title: "博客搭建",
		description:
			"Gmeek博客、Mizuki博客",
		type: "achievement",
		startDate: "2025-10-08",
		skills: ["博客", "代码"],
		achievements: [
			'先尝试的Gmeek，不满足',
			"现在再用Mizuki模板，好看！",
		],
		icon: "mdi:trophy",
		color: "#10ca3eff",
	},
];
